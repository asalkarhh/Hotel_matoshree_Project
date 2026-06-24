import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Loader2, Send } from 'lucide-react';

export default function ApplyForm() {
  const { t, i18n } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  // Rebuild schema on language change so error messages are in the right language
  const schema = useMemo(
    () =>
      z.object({
        name:        z.string().trim().min(1, t('form.errors.nameRequired')),
        mobile:      z.string().trim().min(1, t('form.errors.mobileRequired'))
                       .regex(/^[6-9]\d{9}$/, t('form.errors.mobileInvalid')),
        email:       z.string().trim().email(t('form.errors.emailInvalid')).optional().or(z.literal('')),
        city:        z.string().trim().min(1, t('form.errors.cityRequired')),
        type:        z.enum(['hotel', 'tea'], { errorMap: () => ({ message: t('form.errors.typeRequired') }) }),
        budget:      z.string().optional(),
        hasLocation: z.string().optional(),
        message:     z.string().optional(),
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema), mode: 'onBlur' });

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 900)); // simulate network
    console.log('Franchise inquiry submitted:', data);
    setSubmitted(true);
    reset();
  };

  const budgetOptions = t('form.budget.options', { returnObjects: true });

  const fieldCls =
    'w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20';
  const labelCls  = 'mb-1.5 block text-sm font-semibold text-ink';
  const errorCls  = 'mt-1 text-sm text-red-600';

  return (
    <section id="apply" className="section bg-gradient-to-b from-cream to-white">
      <div className="container-max">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <span className="eyebrow">{t('form.eyebrow')}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">{t('form.title')}</h2>
            <p className="mt-4 text-ink/70">{t('form.subtitle')}</p>
          </div>

          {/* Success state */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card text-center"
            >
              <CheckCircle size={56} className="mx-auto text-green-600" />
              <h3 className="mt-4 text-2xl font-bold text-ink">{t('form.successTitle')}</h3>
              <p className="mt-2 text-ink/70">{t('form.successMsg')}</p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="btn-brand mt-6"
              >
                {t('form.successAgain')}
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="card grid gap-5 sm:grid-cols-2"
            >
              {/* Name */}
              <div>
                <label className={labelCls} htmlFor="name">{t('form.name.label')}</label>
                <input id="name" className={fieldCls} placeholder={t('form.name.placeholder')} {...register('name')} />
                {errors.name && <p className={errorCls}>{errors.name.message}</p>}
              </div>

              {/* Mobile */}
              <div>
                <label className={labelCls} htmlFor="mobile">{t('form.mobile.label')}</label>
                <input id="mobile" inputMode="numeric" maxLength={10} className={fieldCls} placeholder={t('form.mobile.placeholder')} {...register('mobile')} />
                {errors.mobile && <p className={errorCls}>{errors.mobile.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className={labelCls} htmlFor="email">{t('form.email.label')}</label>
                <input id="email" type="email" className={fieldCls} placeholder={t('form.email.placeholder')} {...register('email')} />
                {errors.email && <p className={errorCls}>{errors.email.message}</p>}
              </div>

              {/* City */}
              <div>
                <label className={labelCls} htmlFor="city">{t('form.city.label')}</label>
                <input id="city" className={fieldCls} placeholder={t('form.city.placeholder')} {...register('city')} />
                {errors.city && <p className={errorCls}>{errors.city.message}</p>}
              </div>

              {/* Type */}
              <div>
                <label className={labelCls} htmlFor="type">{t('form.type.label')}</label>
                <select id="type" defaultValue="" className={fieldCls} {...register('type')}>
                  <option value="" disabled>{t('form.type.placeholder')}</option>
                  <option value="hotel">{t('form.type.hotel')}</option>
                  <option value="tea">{t('form.type.tea')}</option>
                </select>
                {errors.type && <p className={errorCls}>{errors.type.message}</p>}
              </div>

              {/* Budget */}
              <div>
                <label className={labelCls} htmlFor="budget">{t('form.budget.label')}</label>
                <select id="budget" defaultValue="" className={fieldCls} {...register('budget')}>
                  <option value="" disabled>{t('form.budget.placeholder')}</option>
                  {budgetOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Has location */}
              <div className="sm:col-span-2">
                <span className={labelCls}>{t('form.hasLocation.label')}</span>
                <div className="flex gap-6 pt-1">
                  <label className="flex items-center gap-2 text-ink/80">
                    <input type="radio" value="yes" className="accent-brand" {...register('hasLocation')} />
                    {t('form.hasLocation.yes')}
                  </label>
                  <label className="flex items-center gap-2 text-ink/80">
                    <input type="radio" value="no" className="accent-brand" {...register('hasLocation')} />
                    {t('form.hasLocation.no')}
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className={labelCls} htmlFor="message">{t('form.message.label')}</label>
                <textarea id="message" rows={4} className={fieldCls} placeholder={t('form.message.placeholder')} {...register('message')} />
              </div>

              {/* Submit */}
              <div className="sm:col-span-2">
                <button type="submit" disabled={isSubmitting} className="btn-brand w-full">
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      {t('form.submitting')}
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      {t('form.submit')}
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
