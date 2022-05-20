<template>
    <div @click="handleActiveCheckbox" class="checkbox">
        <span :class="{active:checkboxActive}"></span>
        <label>{{labelValue}}</label>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    props: ["labelValue"],
    setup() {
        const checkboxActive = ref(false)

        const handleActiveCheckbox = () => {
            checkboxActive.value = !checkboxActive.value
        }

        return{
            checkboxActive,
            handleActiveCheckbox
        }
    }
}
</script>

<style lang="scss">
.checkbox{
    display: flex;
    cursor: pointer;
    span{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: 2px solid #FE5F1E;
        background: #fff;
        margin-top: 4px;

        &.active{
            background: #FE5F1E;
        }
    }

    label{
        font-style: normal;
        font-weight: 300 !important;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.01em;
        color: rgba(44, 44, 44, 0.5);
        margin: 0 0 10px 15px !important;
    }
}
</style>