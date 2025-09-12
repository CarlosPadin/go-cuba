import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async () => {
  // Static for now
  const locale = 'es';
 
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});