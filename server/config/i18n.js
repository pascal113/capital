import { I18n } from 'i18n';
import path from 'path';
const i18n = new I18n({
  locales: ['de', 'gb'],
  defaultLocale: 'de',
  directory: path.join('./server/', 'locales')
});
export default i18n;