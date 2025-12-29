import './fonts.pcss';
import './style.pcss';
import linkTemplateRaw from './partial/links.hbs?raw';
import errorTemplateRaw from './partial/error.hbs?raw';
import loginTemplateRaw from './partial/form.hbs?raw';
import registerTemplateRaw from './partial/form__register.hbs?raw';

document.querySelector('#app').innerHTML = `
<footer class="footer">
      <a class="logo__container" href="/">
        <img alt="Логотип" class="logo-icon" src="/static/img/paw-icon.svg" />
        <span class="display gray__color">paw_messenger</span>
      </div>
    </footer>
`
