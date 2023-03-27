<script setup>
import { useGenerateImageVariant } from "@core/composable/useGenerateImageVariant";
import { VNodeRenderer } from "@layouts/components/VNodeRenderer";
import { themeConfig } from "@themeConfig";
import { emailValidator, requiredValidator } from "@validators";
import authV2LoginIllustrationBorderedDark from "@images/pages/auth-v2-login-illustration-bordered-dark.png";
import authV2LoginIllustrationBorderedLight from "@images/pages/auth-v2-login-illustration-bordered-light.png";
import authV2LoginIllustrationDark from "@images/pages/auth-v2-login-illustration-dark.png";
import authV2LoginIllustrationLight from "@images/pages/auth-v2-login-illustration-light.png";
import authV2MaskDark from "@images/pages/misc-mask-dark.png";
import authV2MaskLight from "@images/pages/misc-mask-light.png";

const authThemeImg = useGenerateImageVariant(
  authV2LoginIllustrationLight,
  authV2LoginIllustrationDark,
  authV2LoginIllustrationBorderedLight,
  authV2LoginIllustrationBorderedDark,
  true
);
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark);
const isPasswordVisible = ref(false);
const email = ref("");
const password = ref("");
const rememberMe = ref(false);
</script>

<template>
  <VRow no-gutters class="auth-wrapper">
    <VCol
      cols="12"
      lg="12"
      class="d-flex flex-column align-center justify-center"
    >
      <div class="d-flex align-center justify-center mb-4">
        <v-img :width="245" :height="120" contain src="main-logo.png"></v-img>
      </div>
      <p class="title mt-12 mt-sm-0 pt-4 mb-0">
        Para começar, nos conte mais sobre sua empresa
      </p>

     
        <VCardText >
          <VRow class="d-flex flex-column align-center justify-center">
            <!-- email -->
            <VCol cols="7">
              <p class="label">Nome da empresa *</p>

              <VTextField
                v-model="email"
                label="Nome da empresa"
                type="email"
                single-line
                :rules="[requiredValidator, emailValidator]"
              />
            </VCol>
            <VCol cols="7">
              <p>CNPJ</p>

              <VTextField
                v-model="email"
                label="CNPJ"
                type="email"
                single-line
                :rules="[requiredValidator, emailValidator]"
              />
            </VCol>
            <VCol cols="7">
              <p>
                You can add icons to the text field with
              
              </p>

              <VTextField
                v-model="email"
                label="Email"
                type="email"
                single-line
                :rules="[requiredValidator, emailValidator]"
              />
            </VCol>

            <!-- password -->
            <VCol cols="2">
              <VBtn block type="submit"> Continue </VBtn>
            </VCol>
          </VRow>
        </VCardText>
      
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>

<style scoped>
.loading-logo {
  display: flex;
  justify-content: center;
}

.title {
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  color: #000000;
}
.label {
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
}
.crad {
  color: #82868b;
}
</style>
<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
  redirectIfLoggedIn: true
</route>
