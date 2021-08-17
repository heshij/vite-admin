<template>
  <div class="flex justify-between items-center relative p-4">
    <span class="w-1/2 h-full -enter-x">
      <AppLogo :alwaysShowTitle="true" />
    </span>
    <h2 class="text-2xl font-bold text-center xl:text-2xl enter-x xl:text-left xl:my-0 md:!my-0">
      {{ getFormTitle }}
    </h2>
  </div>
</template>
<script lang="ts">
  import { AppLogo } from '/@/components/Application';

  import { defineComponent, computed, unref } from 'vue';

  import { useI18n } from '/@/hooks/web/useI18n';
  import { LoginStateEnum, useLoginState } from './useLogin';

  export default defineComponent({
    name: 'LoginFormTitle',
    components: {
      AppLogo,
    },
    setup() {
      const { t } = useI18n();

      const { getLoginState } = useLoginState();

      const getFormTitle = computed(() => {
        const titleObj = {
          [LoginStateEnum.RESET_PASSWORD]: t('sys.login.forgetFormTitle'),
          [LoginStateEnum.LOGIN]: t('sys.login.signInFormTitle'),
          [LoginStateEnum.REGISTER]: t('sys.login.signUpFormTitle'),
          [LoginStateEnum.MOBILE]: t('sys.login.mobileSignInFormTitle'),
          [LoginStateEnum.QR_CODE]: t('sys.login.qrSignInFormTitle'),
        };
        return titleObj[unref(getLoginState)];
      });

      return {
        getFormTitle,
      };
    },
  });
</script>
