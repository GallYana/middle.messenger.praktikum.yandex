import './fonts.pcss';
import './style.pcss';
import Handlebars from 'handlebars';
import linkTemplateRaw from './partial/links.hbs?raw';
import errorTemplateRaw from './partial/error.hbs?raw';
import loginTemplateRaw from './partial/form.hbs?raw';
import registerTemplateRaw from './partial/form__register.hbs?raw';

data: {
  footer: `<footer class="footer">
    <a class="logo__container" href="/">
    <img alt="Логотип" class="logo-icon" src="/static/img/paw-icon.svg" />
    <span class="display gray__color">paw_messenger</span>
    </div>
</footer>`
}

const PAGES = {
  '/': {
    template: Handlebars.compile(linkTemplateRaw),
    data: { 
      wrapperClassName: 'center__container', links: ["error__404", "error__500", "login", "register"] 
    }
  },
  '/register': {
    template: Handlebars.compile(registerTemplateRaw),
    data: { 
      wrapperClassName: 'login__container center__container', title: 'Регистрация',
      formItems: [
        {
          type: "text",
          label: "Логин",
          inputValue: "login",
          placeholder: "Введите логин"
        },

        {
          type: "text",
          label: "Имя",
          inputValue: "first_name",
          placeholder: "Введите имя"
        },

        {
          type: "text",
          label: "Фамилия",
          inputValue: "second_name",
          placeholder: "Введите фамилию"
        },

        {
          type: "email",
          label: "Почта",
          inputValue: "email",
          placeholder: "Введите электронную почту"
        },

        {
          type: "phone",
          label: "Телефон",
          inputValue: "phone",
          placeholder: "Введите номер телефона"
        },

        {
          type: "password",
          label: "Пароль",
          inputValue: "password",
          placeholder: "Введите пароль"
        },

        {
          type: "password",
          label: "Повторите пароль",
          inputValue: "repeat_password",
          placeholder: "Введите пароль"
        }
      ] 
    }
  },
  '/login': {
    template: Handlebars.compile(loginTemplateRaw),
    data: { 
      wrapperClassName: 'login__container center__container', title: 'Вход',
      formItems: [
        {
          type: "text",
          label: "Логин",
          inputValue: "login",
          placeholder: "Введите логин"
        },

        {
          type: "password",
          label: "Пароль",
          inputValue: "password",
          placeholder: "Введите пароль"
        },
      ] 
    }
  },
  '/error__404': {
    template: Handlebars.compile(errorTemplateRaw),
    data: { 
      wrapperClassName: 'error__container center__container', error: '404', errorText: 'Не удалось найти страницу по указанному адресу' 
    }
  },
  '/error__500': {
    template: Handlebars.compile(errorTemplateRaw),
    data: { 
      wrapperClassName: 'error__container center__container', error: '500', errorText: 'Произошла непредвиденная ошибка, попробуйте перезагрузить страницу' 
    }
  }
};

function getCurrentPage() {
  const path = window.location.pathname;
  return PAGES[path] ? path : '/';
}

document.addEventListener('DOMContentLoaded', function() {
  const currentPath = getCurrentPage();
  const pageConfig = PAGES[currentPath];
  document.querySelector('#app').innerHTML = pageConfig.template(pageConfig.data);
});

console.log(currentUrl);
