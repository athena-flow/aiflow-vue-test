<template>
    <div :data-clazz="model.clazz">
        <div class="panelTitle">{{i18n['cnWordSegmentation']}}</div>
        <div class="panelBody">
            <DefaultDetail :model="model" :onChange="onChange" :readOnly="readOnly" />
            <el-collapse :value="opened">
                <el-collapse-item title="算法IO参数" name="1">
                    <div class="panelRow">
                        <div>输入数据：</div>
                        <el-input style="width:90%; font-size:12px"
                                  type="textarea"
                                  :rows="4"
                                  :disabled="readOnly"
                                  :value="model.input"
                                  @input="(value) => {onChange('input', value)}" />
                    </div>
                    <div class="panelRow">
                        <div>输出数据：</div>
                        <el-input style="width:90%; font-size:12px"
                                  type="textarea"
                                  :rows="4"
                                  :disabled="readOnly"
                                  :value="model.output"
                                  @input="(value) => {onChange('output', value)}" />
                    </div>
                    <div class="panelRow">
                        <div>自定义词典路径：</div>
                        <el-input style="width:90%; font-size:12px"
                                  type="textarea"
                                  :rows="4"
                                  :disabled="readOnly"
                                  :value="model.dictPath"
                                  @input="(value) => {onChange('dictPath', value)}" />
                    </div>
                </el-collapse-item>
                <el-collapse-item title="算法参数" name="2">
                    <div class="panelRow">
                        <div>标签分隔符：</div>
                        <el-input style="width:90%; font-size:12px"
                                  type="textarea"
                                  :rows="4"
                                  :disabled="readOnly"
                                  :value="model.tagDivision"
                                  @input="(value) => {onChange('tagDivision', value)}" />
                    </div>
                    <div class="panelRow">
                        <div>句子分隔符：</div>
                        <el-input style="width:90%; font-size:12px"
                                  type="textarea"
                                  :rows="4"
                                  :disabled="readOnly"
                                  :value="model.sentenceDivision"
                                  @input="(value) => {onChange('sentenceDivision', value)}" />
                    </div>
                </el-collapse-item>
                <el-collapse-item title="资源参数" name="3">
                    <div class="panelRow">
                        <div>资源类型：</div>
                        <el-input style="width:90%; font-size:12px"
                                  type="textarea"
                                  :rows="4"
                                  :disabled="readOnly"
                                  :value="model.resourceType"
                                  @input="(value) => {onChange('resourceType', value)}" />
                    </div>
                </el-collapse-item>
            </el-collapse>
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
    data() {
      return {
          activeName: '1'//展开name为1的折叠板
      };
    },
    computed: {
      opened() {
          return ["1","2","3"];
      }
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
<style lang="scss" >
    .panelBody {
        .el-collapse {
            .el-collapse-item__header {
                padding: 5px 12px;
                background: #DCE3E8;
            }
            .el-collapse-item__content {
                background: #f0f2f5;
            }
        }
    }
</style>
