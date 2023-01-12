<template>
  <AlerBoxModal :auto="true">
    <div class="article-box">
      <div class="change-user-img">
        <TheAvatar
          :width="48"
          :height="48"
          style="margin-right: 10px"
          :src="profileData.userImg"
        />
        <EllipseButton :title="'上傳大頭照'" :path="'/share'" />
        <input type="file" class="inputFile" @change="uploadUserImg" />
      </div>
      <div class="change-share-img">
        <img :src="profileData.imageUrl || defaultImg" />
        <EllipseButton :title="'上傳分享照片'" :path="'/share'" />
        <input type="file" class="inputFile" @change="uploadImg" />
      </div>
      <form class="profileForm">
        <label for="name">名字：</label>
        <input type="text" v-model="profileData.name" /><label for="mobilePhone"
          >分享標題：</label
        >
        <input type="text" v-model="profileData.title" />
        <label for="description">分享內容：</label>
        <textarea rows="12" v-model="profileData.description"></textarea>

        <div class="actions">
          <EllipseButton
            :title="'取消'"
            :path="'/share'"
            @click="store.commit('changeIsAlertBoxOpen', [false, false, false])"
          />
          <EllipseButton
            :title="'確認'"
            :path="'/share'"
            @click="
              store.commit('addArticleItem', profileData);
              store.commit('changeIsAlertBoxOpen', [false, false, false]);
              clearArticleData();
            "
          />
        </div>
      </form></div
  ></AlerBoxModal>
</template>
<script setup>
import AlerBoxModal from "../components/message/AlerBoxModal.vue";
import EllipseButton from "./atom/EllipseButton.vue";
import TheAvatar from "./atom/TheAvatar.vue";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import defaultImg from "../images/upload.png";

const store = useStore();
const profileData = ref({
  imageUrl: "",
  shareTime: "",
  name: "",
  shareEyes: "",
  shareMessage: "",
  shareLike: "",
  userImg: "",
  title: "",
  description: "",
});

const clearArticleData = () => {
  profileData.value = {
    imageUrl: "",
    shareTime: "",
    name: "",
    shareEyes: "",
    shareMessage: "",
    shareLike: "",
    userImg: "",
    title: "",
    description: "",
  };
};

const uploadUserImg = (e) => {
  const files = e.target.files;

  if (files[0] !== undefined) {
    if (files[0].name.lastIndexOf(".") <= 0) {
      return;
    }

    const fr = new FileReader();

    fr.readAsDataURL(files[0]);

    fr.addEventListener("load", () => {
      profileData.value.userImg = fr.result; // For DOM display purpose.
    });
  } else {
    this.clearImage();
  }
};

const uploadImg = (e) => {
  const files = e.target.files;

  if (files[0] !== undefined) {
    if (files[0].name.lastIndexOf(".") <= 0) {
      return;
    }

    const fr = new FileReader();

    fr.readAsDataURL(files[0]);

    fr.addEventListener("load", () => {
      profileData.value.imageUrl = fr.result; // For DOM display purpose.
    });
  } else {
    this.clearImage();
  }
};
</script>
<style lang="scss" scoped>
.article-box {
  margin: 30px;
  overflow: scroll;
  .title {
    margin-bottom: 42px;
    font-size: 24px;
    font-weight: 600;
  }

  .change-user-img {
    display: flex;
    align-items: center;
    position: relative;
  }

  .change-user-img .button {
    margin-left: 26px;
  }

  .change-share-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: 30px;

    img {
      width: 100%;
      height: 500px;
      margin: 30px;
    }
  }

  .change-share-img .button {
    margin-left: 26px;
  }

  .inputFile {
    opacity: 0;
    position: absolute;
    cursor: pointer;
    top: 0;
    bottom: 0;
  }

  .profileForm {
    display: grid;
    grid-template-columns: max-content 1fr;
    row-gap: 32px;
    column-gap: 10px;
    margin-top: 38px;
  }

  .profileForm > label {
    grid-column: 1 / 2;
    justify-self: end;
    position: relative;
    top: 6px;
  }

  .profileForm .actions {
    grid-column: 1 / 3;
    justify-self: end;
    display: flex;
    gap: 16px;
  }
}
</style>
