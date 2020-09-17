<template>
    <div :data-clazz="model.clazz">
        <div class="panelTitle">{{i18n['scriptLocalTask']}}</div>
        <div class="panelBody">
            <DefaultDetail :model="model" :onChange="onChange" :readOnly="readOnly" />
            <div class="panelRow">
                <div>数据文件：</div>
                <el-input style="width:90%; font-size:12px"
                          type="textarea"
                          :rows="4"
                          :disabled="readOnly"
                          :value="model.localPath"
                          @input="(value) => {onChange('localPath', value)}" />
            </div>
            <div class="panelRow">
                <div>目标COS路径：</div>
                <el-input style="width:90%; font-size:12px"
                          type="textarea"
                          :rows="4"
                          :disabled="readOnly"
                          :value="model.cosTargetPath"
                          @input="(value) => {onChange('cosTargetPath', value)}" />
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
