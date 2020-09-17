<template>
    <div :data-clazz="model.clazz">
        <div class="panelTitle">{{i18n['scriptLocalTask']}}</div>
        <div class="panelBody">
            <DefaultDetail :model="model" :onChange="onChange" :readOnly="readOnly" />
            <div class="panelRow">
                <div>COS数据路径：</div>
                <el-input style="width:90%; font-size:12px"
                          type="textarea"
                          :rows="4"
                          :disabled="readOnly"
                          :value="model.cosPath"
                          @input="(value) => {onChange('cosPath', value)}" />
            </div>
        </div>
    </div>
</template>
<script>
  import DefaultDetail from "./DefaultDetail";
  export default {
    inject: ['i18n'],
    components: {
      DefaultDetail
    },
    props: {
      model: {
        type: Object,
        default: () => ({}),
      },
      onChange: {
        type: Function,
        default: () => {}
      },
      readOnly: {
        type: Boolean,
        default: false,
      }
    },
  }
</script>
