<template>
  <div class="container">
    <div class="logo">home</div>
    <vTabBar></vTabBar>
  </div>
</template>

<script>
import vTabBar from "@/pages/dashboard/mp/index";
// import vImageView from "@/components/base/imageView";
const phoneRegExp = /^1(3|4|5|6|7|8|9)\d{9}$/;
const passwordRegExp = /^\S{5,}$/;
const codeRegExp = /^\S{4}$/;

export default {
  data() {
    return {
      active: 0,

      codeText: "获取验证码",

      // error status
      isNormalPhoneError: false,
      isNormalPasswordError: false,
      isMessagePhoneError: false,
      isMessageCodeError: false,
      isFormError: false,
      isCodeDesabled: false,

      // form data
      normal: {
        phone: "",
        password: ""
      },
      message: {
        phone: "",
        code: ""
      }
    };
  },

  components: {
    vTabBar
  },

  methods: {
    setFieldStatus(result, id) {
      if (!result) {
        this.isFormError = true;
        this[`is${id}Error`] = true;
      } else {
        this.isFormError = false;
        this[`is${id}Error`] = false;
      }
    },

    // bind date
    onNormalPhoneChange(e) {
      this.normal.phone = e.mp.detail;
    },
    onNormalPasswordChange(e) {
      this.normal.password = e.mp.detail;
    },
    onMessagePhoneChange(e) {
      this.message.phone = e.mp.detail;
    },
    onMessageCodeChange(e) {
      this.message.code = e.mp.detail;
    },

    // validate
    checkNormalPhoneValue() {
      this.setFieldStatus(phoneRegExp.test(this.normal.phone), "NormalPhone");
    },
    checkNormalPasswordValue() {
      this.setFieldStatus(
        passwordRegExp.test(this.normal.password),
        "NormalPassword"
      );
    },
    checkMessagePhoneValue() {
      this.setFieldStatus(phoneRegExp.test(this.message.phone), "MessagePhone");
    },
    checkMessageCodeValue() {
      this.setFieldStatus(codeRegExp.test(this.message.code), "MessageCode");
    },

    onCodeSend() {
      wx.showToast({
        title: `验证码已发送`
      });
      // Countdown
      const countdown = 60;
      const rawText = this.codeText;
      this.isCodeDesabled = true;

      for (let index = countdown; index >= 0; index--) {
        setTimeout(() => {
          this.codeText = `已发送（${index}s）`;
          if (index === 0) {
            this.codeText = rawText;
            this.isCodeDesabled = false;
          }
        }, 1000 * (countdown - index));
      }
    },

    onSubmit() {
      let formDate;

      if (this.active === 0) {
        this.checkNormalPhoneValue();
        this.checkNormalPasswordValue();
        formDate = this.normal;
      } else {
        this.checkMessagePhoneValue();
        this.checkMessageCodeValue();
        formDate = this.message;
      }

      if (!this.isFormError) {
        wx.showToast({
          title: `发送数据 ${JSON.stringify(formDate)}`,
          icon: "none"
        });

        // router jump
        setTimeout(() => {
          wx.switchTab({
            url: "/pages/index/main"
          });
        }, 1000);
      }
    },

    onTabsChange(event) {
      this.active = event.mp.detail.index;
      // reset form status
      this.isFormError = false;
    }
  }
};
</script>


<style scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 320px;
  color: white;
  background-color: rgb(186, 68, 255);
  font-size: 64px;
}
.panel {
  position: relative;
  top: -60px;
  padding: 40px 40px 60px 40px;
  box-shadow: 0 0 10px 1px rgb(173, 173, 173);
  background-color: white;
}
.button {
  position: relative;
  top: -100px;
}
.helper {
  display: flex;
  justify-content: space-between;
}

.text-helper {
  display: inline-block;
  padding: 12px 0;
  color: #f44;
  font-size: 14px;
}
</style>
