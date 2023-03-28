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
const companyName = ref("");
const cnpj = ref("");
const cep = ref("");
const managerName = ref("");
const address = ref("");
const neighborHood = ref("");
const city = ref("");
const state = ref("");
const number = ref("");
const email = ref("");
const responsible = ref("");
const responsibleEmail = ref("");
const telephone = ref("");
const observation = ref("");

const password = ref("");
const rememberMe = ref(false);
const currentStep = ref(0);
const title = ref("");
const width = ref(613);
const selectedItem = ref("Portuguese");

const items = ["Portuguese", "Portuguese1", "Portuguese2", "Portuguese23"];

const goToNextPage = () => {
  if (currentStep.value != 4) currentStep.value = currentStep.value + 1;
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
  <VRow no-gutters class="auth-wrapper pb-12">
    <VCol cols="12" lg="12" class="d-flex justify-center mt-10">
      <div class="d-flex align-center flex-column justify-center">
        <v-img
          :width="245"
          :height="120"
          contain
          src="main-logo.png"
          class="mb-12"
        ></v-img>
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
                v-model="companyName"
                label="Nome da empresa"
                type="email"
                single-line
              />
            </VCol>
            <VCol cols="12">
              <p class="label">CNPJ</p>

              <VTextField
                v-model="cnpj"
                label="CNPJ"
                type="email"
                single-line
              />
            </VCol>
            <VCol cols="12">
              <p class="label">CEP</p>
              <VTextField v-model="cep" label="CEP" type="email" single-line />
            </VCol>

            <VCol cols="12">
              <p class="label">Nome do gestor</p>

              <VTextField
                v-model="managerName"
                label="Nome do gestor"
                type="email"
                single-line
              />
            </VCol>
          </VRow>

          <VRow v-if="currentStep == 2">
            <!-- email -->
            <VCol cols="12">
              <p class="label">Endereço</p>
              <VTextField
                v-model="address"
                label="Endereço"
                type="email"
                single-line
              />
            </VCol>
            <VCol cols="12">
              <p class="label">Bairro</p>

              <VTextField
                v-model="neighborHood"
                label="Bairro"
                type="email"
                single-line
              />
            </VCol>
            <VCol cols="12">
              <p class="label">Cidade</p>

              <VTextField
                v-model="city"
                label="Cidade"
                type="email"
                single-line
              />
            </VCol>

            <VCol cols="12">
              <p class="label">Estado</p>

              <VTextField
                v-model="state"
                label="Estado"
                type="email"
                single-line
              />
            </VCol>
            <VCol cols="12">
              <p class="label">Número</p>

              <VTextField
                v-model="number"
                label="Número"
                type="email"
                single-line
              />
            </VCol>
            <VCol cols="12">
              <p class="label">Complemento</p>

              <VTextField
                v-model="email"
                label="Complemento"
                type="email"
                single-line
              />
            </VCol>
          </VRow>

          <VRow v-if="currentStep == 3">
            <!-- email -->
            <VCol cols="12">
              <p class="label">Responsável</p>
              <VTextField
                v-model="responsible"
                label="Nome do responsável"
                type="email"
                single-line
              />
            </VCol>
            <VCol cols="12">
              <p class="label">Email do Responsável</p>

              <VTextField
                v-model="responsibleEmail"
                label="Bairro"
                type="email"
                single-line
              />
            </VCol>
            <VCol cols="12">
              <p class="label">Telefone</p>

              <VTextField
                v-model="telephone"
                label="Telefone"
                type="email"
                single-line
              />
            </VCol>

            <VCol cols="12">
              <p class="label">Observação</p>

              <VTextField
                v-model="observation"
                label="Observação"
                type="email"
                single-line
              />
            </VCol>
          </VRow>
          <VRow v-if="currentStep == 4" class="d-flex justify-center">
            <!-- email -->
            <VCol cols="5" class="pe-12 me-6">
              <h1 class="step-4-title mb-2">
                Aparência do Widget e idioma padrão
              </h1>
              <p class="step-4-description">
                Esta etapa do assistente orienta você pela configuração básica.
                Você pode alterar o estilo do widget, o idioma padrão e muito
                mais a qualquer momento por meio das configurações do widget
              </p>
              <p class="step-4-header">Estilo do widget</p>
              <p class="step-4-theme mb-0">Temas prontos</p>
              <div class="circle mt-1 mb-3">
                <v-img
                  :width="16"
                  :height="16"
                  contain
                  class="inside-icon"
                  src="color-flag.svg"
                ></v-img>
                <!-- <img " src="" /> -->
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
            <VCol cols="3">
              <div class="upper-mob-wedget">
                <div class="upper-card">
                  <div class="pt-8 d-flex justify-space-between icon-header">
                    <v-img
                      :height="27"
                      contain
                      src="chat-icon-small.png"
                    ></v-img>
                    <v-img :width="16" :height="16" contain src="x.png" class="cross"></v-img>
                  </div>
                  <p class="chat-box-header mx-8 pt-4 mb-0">
                    Olá, bem-vindo ao OnCenter Chat 👋
                  </p>
                  <p class="chat-box-description mx-8 mb-0 pt-1">
                    Como podemos te ajudar?
                  </p>
                </div>
                <div class="mid-card">
                  <div class="conversation-overlay px-5">
                    <div class="d-flex justify-space-between mt-3 conversation-title ">
                      <p>Suas conversas</p>
                      <p>Suas conversas</p>
                    </div>

                    <v-img
                      :width="283"
                      :height="181"
                      contain
                      src="conversation-img.svg"
                    ></v-img>
                    <div class="nova-conversa">
                      <VBtn type="submit" class="start-conversa mb-5">
                        <v-img
                          :width="12"
                          :height="12"
                          contain
                          src="send.svg"
                        ></v-img>

                        <span class="ms-1"> Nova conversa</span>
                      </VBtn>
                    </div>
                  </div>
                </div>
                <div class="bottom-card ps-4 pt-2 pb-2">
                  <v-img :width="16" :height="16" src="setting.png"></v-img>

                  <v-img
                    :width="41"
                    :height="11"
                    src="chat-icon-micro.svg"
                  ></v-img>
                </div>
              </div>
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

.cross {
  cursor: pointer;
}
.nova-conversa {
  display: grid;
  justify-content: center;
}
.conversation-overlay {
  width: 321px;
  background: #ffffff;
  box-shadow: 0px 3.22673px 9.68019px rgba(0, 0, 0, 0.25);
  border-radius: 3.22673px;
  position: absolute;
  left: 8.87px;
  top: -36.38px;
  flex-direction: column;
}
.start-conversa {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8.06682px 17.747px;
  gap: 6.45px;
  font-size: 14px;

  font-weight: 500;
  height: 30.13px;
  text-transform: capitalize;

  /* 6) Filled Button / Primary: Active */

  background: #5e50ee;
  border-radius: 37.9141px;
}
.conversation-title {
  font-weight: 400;
  font-size: 12.9069px;
  line-height: 16px;
  /* identical to box height */

  color: #5e5873;
}
.icon-header {
  margin-left: -44px;
  margin-right: -90px;
}
.bottom-card {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 0.9fr 1fr;
}
.chat-box-header {
  font-weight: 500;
  font-size: 22.5871px;
  line-height: 28px;
  color: #ffffff;
}

.chat-box-description {
  font-weight: 400;
  font-size: 12.9069px;
  line-height: 16px;
  /* identical to box height */

  color: #ffffff;
}
.upper-card {
  width: 338px;
  padding-bottom: 70px;
  left: 0px;
  top: 0px;
  border-top-left-radius: 12.9069px;
  border-top-right-radius: 12.9069px;
  background: linear-gradient(180deg, #2b6bc2 0%, #8dabd6 100%);
}

.mid-card {
  padding: 140px 0px;
  width: 338px;
  position: relative;
}
.upper-mob-wedget {
  width: 338px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12.9069px;
  display: flex;
  flex-direction: column;
}
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
  font-size: 16px;
  font-weight: 500;
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
  width: 70px;
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
  opacity: 0.8;
}
</style>
<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
  redirectIfLoggedIn: true
</route>
