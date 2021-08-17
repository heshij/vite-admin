<template>
  <div :class="prefixCls" class="relative w-full h-full px-4">
    <AppLocalePicker
      class="absolute text-white top-4 right-4 enter-x xl:text-gray-600"
      :showText="false"
      v-if="!sessionTimeout && showLocale"
    />
    <AppDarkModeToggle class="absolute top-3 right-7 enter-x" v-if="!sessionTimeout" />

    <div class="container flex justify-center relative w-full h-full py-2 mx-auto sm:px-10">
      <div class="flex justify-center w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12">
        <div
          :class="`${prefixCls}-form`"
          class="
            relative
            w-full
            mx-auto
            my-auto
            px-5
            py-8
            rounded-md
            shadow-md
            xl:bg-transparent
            sm:px-8
            xl:p-4 xl:shadow-none
            sm:w-3/4
            lg:w-2/4
            xl:w-auto
            enter-x
          "
        >
          <LoginForm />
          <!--          <ForgetPasswordForm />-->
          <!--          <RegisterForm />-->
          <!--          <MobileForm />-->
          <!--          <QrCodeForm />-->
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { AppLocalePicker, AppDarkModeToggle } from '/@/components/Application';
  import LoginForm from './LoginForm.vue';
  // import ForgetPasswordForm from './ForgetPasswordForm.vue';
  // import RegisterForm from './RegisterForm.vue';
  // import MobileForm from './MobileForm.vue';
  // import QrCodeForm from './QrCodeForm.vue';

  import { useGlobSetting } from '/@/hooks/setting';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { useLocaleStore } from '/@/store/modules/locale';

  export default defineComponent({
    name: 'Login',
    components: {
      LoginForm,
      // ForgetPasswordForm,
      // RegisterForm,
      // MobileForm,
      // QrCodeForm,
      AppLocalePicker,
      AppDarkModeToggle,
    },
    props: {
      sessionTimeout: {
        type: Boolean,
      },
    },
    setup() {
      const globSetting = useGlobSetting();
      const { prefixCls } = useDesign('login');
      const { t } = useI18n();
      const localeStore = useLocaleStore();

      return {
        t,
        prefixCls,
        title: computed(() => globSetting?.title ?? ''),
        showLocale: localeStore.getShowPicker,
      };
    },
  });
</script>
<style lang="less">
  @prefix-cls: ~'@{namespace}-login';
  @logo-prefix-cls: ~'@{namespace}-app-logo';
  @countdown-prefix-cls: ~'@{namespace}-countdown-input';
  @dark-bg: #293146;

  html[data-theme='dark'] {
    .@{prefix-cls} {
      background-color: @dark-bg;

      &::before {
        //background-image: url(/@/assets/svg/login-bg-dark.svg);
      }

      .ant-input,
      .ant-input-password {
        background-color: #232a3b;
      }

      .ant-btn:not(.ant-btn-link):not(.ant-btn-primary) {
        border: 1px solid #4a5569;
      }

      &-form {
        background: transparent !important;
      }

      .app-iconify {
        color: #fff;
      }

      .container .@{logo-prefix-cls} {
        &__title {
          color: #fff;
        }

        img {
          width: 32px;
        }
      }
    }
  }

  .@{prefix-cls} {
    min-height: 100%;
    overflow: hidden;
    background-color: #293146;

    .@{prefix-cls}-form {
      background-color: #fff;
    }

    &::before {
      @media (max-width: @screen-xl) {
        display: none;
      }
    }

    .@{logo-prefix-cls} {
      //position: absolute;
      //top: 12px;
      //height: 30px;

      &__title {
        font-size: 16px;
        color: #fff;
      }

      img {
        width: 32px;
      }
    }

    .container {
      .@{logo-prefix-cls} {
        display: flex;
        width: 100%;

        &__title {
          font-size: 18px;
          color: #666;
        }

        img {
          width: 32px;
        }
      }
    }

    &-sign-in-way {
      .anticon {
        font-size: 22px;
        color: #888;
        cursor: pointer;

        &:hover {
          color: @primary-color;
        }
      }
    }

    input:not([type='checkbox']) {
      min-width: 360px;

      @media (max-width: @screen-xl) {
        min-width: 320px;
      }

      @media (max-width: @screen-lg) {
        min-width: 260px;
      }

      @media (max-width: @screen-md) {
        min-width: 240px;
      }

      @media (max-width: @screen-sm) {
        min-width: 160px;
      }
    }

    .@{countdown-prefix-cls} input {
      min-width: unset;
    }

    .ant-divider-inner-text {
      font-size: 12px;
      color: @text-color-secondary;
    }
  }
</style>
