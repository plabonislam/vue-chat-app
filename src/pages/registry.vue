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
import { onBeforeMount } from "vue";

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
const currentStep = ref(0);
const title = ref("");
const width = ref(613);
const selectedItem = ref("Programming");

const items = ["Portuguese", "Portuguese1", "Portuguese2", "Portuguese23"];

const goToNextPage = () => {
  currentStep.value = currentStep.value + 1;
  if (currentStep.value == 1) {
    title.value = "Para começar, nos conte mais sobre sua empresa";
    width.value = "613";
  } else if (currentStep.value == 2) {
    title.value = "Onde sua empresa está localizada?";
    width.value = "613";
  } else if (currentStep.value == 3) {
    title.value = "";
    width.value = "613";
  } else {
    width.value = "100%";
  }
};

onBeforeMount(() => {
  currentStep.value = currentStep.value + 1;
  if (currentStep.value == 1) {
    title.value = "Para começar, nos conte mais sobre sua empresa";
  } else if (currentStep.value == 2) {
    title.value = "Onde sua empresa está localizada?";
  }
});
</script>

<template>
  <VRow no-gutters class="auth-wrapper">
    <VCol cols="12" lg="12" class="d-flex justify-center mt-12">
      <div class="d-flex align-center flex-column justify-center">
        <v-img :width="245" :height="120" contain src="main-logo.png"></v-img>
        <p class="title mt-12 mt-sm-0 pt-4 mb-0">
          {{ title }}
        </p>
      </div>
    </VCol>
    <VCol cols="12" lg="12" class="d-flex justify-center">
      <VCard flat :width="width">
        <VCardText>
          <VRow v-if="currentStep == 1">
            <!-- email -->
            <VCol cols="12">
              <p class="label">Nome da empresa *</p>
              <VTextField
                v-model="email"
                label="Nome da empresa"
                type="email"
                single-line
                :rules="[requiredValidator, emailValidator]"
              />
            </VCol>
            <VCol cols="12">
              <p class="label">CNPJ</p>

              <VTextField
                v-model="email"
                label="CNPJ"
                type="email"
                single-line
                :rules="[requiredValidator, emailValidator]"
              />
            </VCol>
            <VCol cols="12">
              <p class="label">CEP</p>

              <VTextField
                v-model="email"
                label="CEP"
                type="email"
                single-line
                :rules="[requiredValidator, emailValidator]"
              />
            </VCol>

            <VCol cols="12">
              <p class="label">Nome do gestor</p>

              <VTextField
                v-model="email"
                label="Nome do gestor"
                type="email"
                single-line
                :rules="[requiredValidator, emailValidator]"
              />
            </VCol>
          </VRow>

          <VRow v-if="currentStep == 2">
            <!-- email -->
            <VCol cols="12">
              <p class="label">Endereço</p>
              <VTextField
                v-model="email"
                label="Endereço"
                type="email"
                single-line
                :rules="[requiredValidator, emailValidator]"
              />
            </VCol>
            <VCol cols="12">
              <p class="label">Bairro</p>

              <VTextField
                v-model="email"
                label="Bairro"
                type="email"
                single-line
                :rules="[requiredValidator, emailValidator]"
              />
            </VCol>
            <VCol cols="12">
              <p class="label">Cidade</p>

              <VTextField
                v-model="email"
                label="Cidade"
                type="email"
                single-line
                :rules="[requiredValidator, emailValidator]"
              />
            </VCol>

            <VCol cols="12">
              <p class="label">Estado</p>

              <VTextField
                v-model="email"
                label="Estado"
                type="email"
                single-line
                :rules="[requiredValidator, emailValidator]"
              />
            </VCol>
            <VCol cols="12">
              <p class="label">Número</p>

              <VTextField
                v-model="email"
                label="Número"
                type="email"
                single-line
                :rules="[requiredValidator, emailValidator]"
              />
            </VCol>
            <VCol cols="12">
              <p class="label">Complemento</p>

              <VTextField
                v-model="email"
                label="Complemento"
                type="email"
                single-line
                :rules="[requiredValidator, emailValidator]"
              />
            </VCol>
          </VRow>

          <VRow v-if="currentStep == 3">
            <!-- email -->
            <VCol cols="12">
              <p class="label">Responsável</p>
              <VTextField
                v-model="email"
                label="Nome do responsável"
                type="email"
                single-line
                :rules="[requiredValidator, emailValidator]"
              />
            </VCol>
            <VCol cols="12">
              <p class="label">Email do Responsável</p>

              <VTextField
                v-model="email"
                label="Bairro"
                type="email"
                single-line
                :rules="[requiredValidator, emailValidator]"
              />
            </VCol>
            <VCol cols="12">
              <p class="label">Telefone</p>

              <VTextField
                v-model="email"
                label="Telefone"
                type="email"
                single-line
                :rules="[requiredValidator, emailValidator]"
              />
            </VCol>

            <VCol cols="12">
              <p class="label">Observação</p>

              <VTextField
                v-model="email"
                label="Observação"
                type="email"
                single-line
                :rules="[requiredValidator, emailValidator]"
              />
            </VCol>
          </VRow>
          <VRow v-if="currentStep == 4" class="d-flex justify-center">
            <!-- email -->
            <VCol cols="6">
              <h1 class="step-4-title">Aparência do Widget e idioma padrão</h1>
              <p class="step-4-description">
                Esta etapa do assistente orienta você pela configuração básica.
                Você pode alterar o estilo do widget, o idioma padrão e muito
                mais a qualquer momento por meio das configurações do widget
              </p>
              <p class="step-4-header">Estilo do widget</p>
              <p class="step-4-theme">Temas prontos</p>
              <div class="circle">
                <img class="inside-icon" src="color-flag.svg" />
              </div>
              <h6 class="step-4-theme">Cores personalizadas</h6>
              <p class="label">Cor primária</p>
              <div class="main-btn-group">
                <button class="button"></button>
                <p class="button1">#2A6AC1</p>
              </div>
              <p class="label">Idioma padrão do widget</p>
              <VCombobox class="combo" v-model="selectedItem" :items="items" />
              <VBtn type="submit" @click="goToNextPage" class="continue mt-4">
                <v-img
                  :width="18"
                  :height="18"
                  contain
                  src="arrow-right.svg"
                ></v-img>

                <span class="ps-2"> Continuar</span>
              </VBtn>
            </VCol>
            <VCol cols="4">
              <v-img
                :width="338"
                :height="555.5"
                contain
                src="chat-box.png"
              ></v-img>
            </VCol>
          </VRow>
          <VCardText class="d-flex align-center justify-center pa-0">
            <VCol cols="4" class="d-flex justify-center mt-8">
              <VBtn
                block
                type="submit"
                @click="goToNextPage"
                v-if="currentStep != 4"
                class="continue"
              >
                <v-img
                  :width="18"
                  :height="18"
                  contain
                  src="arrow-right.svg"
                ></v-img>

                <span class="ps-2"> Continuar</span>
              </VBtn>
            </VCol>
          </VCardText>
        </VCardText>
        <!-- password -->
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>

<style scoped>
.combo {
  width: 350px;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
}
.continue {
  text-transform: capitalize;
  width: 167px;
  height: 46px;
}
.main-btn-group {
  border: 0.5px solid #cfcfcf;
  border-radius: 4px;
  width: 106px;
  height: 32px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.button {
  width: 28px;
  height: 28px;
  background: #2a6ac1;
  border-radius: 4px 0px 0px 4px;
  margin: 1px;
}
.button1 {
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
  cursor: pointer;
  margin: 0px;
}
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
  margin: 0px;
}

.step-4-title {
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
}

.step-4-description {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  color: #000000;
}

.step-4-header {
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
}

.step-4-theme {
  font-weight: 500;
  font-size: 14px;
  line-height: 23px;
  color: #000000;
}
.circle {
  width: 45px;
  height: 45px;

  background: #d70af1;
  border-radius: 50%;
  position: relative;
}

.inside-icon {
  position: absolute;
  width: 16px;
  height: 16px;
  left: 15px;
  top: 15px;
}
</style>
<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
  redirectIfLoggedIn: true
</route>
