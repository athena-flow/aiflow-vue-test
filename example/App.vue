<template>
  <div id="app">
    <el-button size="small" style="float:right;margin-top:6px;margin-right:6px;" @click="()=>{this.$refs['aiflow'].graph.saveJson()}">导出JSON</el-button>
    <el-button size="small" style="float:right;margin-top:6px;margin-right:6px;" @click="()=>{this.$refs['aiflow'].graph.saveImg()}">导出图片</el-button>
    <el-button size="small" style="float:right;margin-top:6px;margin-right:6px;" @click="()=>{this.view()}">查看JSON</el-button>
    <el-button size="small" style="float:right;margin-top:6px;margin-right:6px;" @click="()=>{this.uploadFile()}">上传JSON</el-button>
    <aiflow-vue
            ref="aiflow"
            :data="demoData"
            :height="600"
            :users="candidateUsers"
            :groups="candidateGroups"
            :categorys="categorys"
            :lang="lang"
    />
    <el-dialog title="查看JSON" :visible.sync="modalVisible" width="60%">
        <pre class="preview-json">
          <code>{{ jsonData }}</code>
        </pre>
    </el-dialog>
    <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%">
        <span>确定上传吗？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="()=>{this.uploadJson()}">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
import AiflowVue from '../src/components/Aiflow'
export default {
  name: 'app',
  components:{
    AiflowVue
  },
  data () {
    return {
      modalVisible:false,
      dialogVisible: false,
      lang: "zh",
      demoData: {
        nodes:[
          { id: 'startNode1', x: 349, y: 53, label: '', clazz: 'start', },
          { id: 'costTaskNode1', x: 200, y: 200, label: 'cos数据集', clazz: 'scriptCosTask', cosPath: 'test'  }
        ],
        edges: [{ id: "flow1600253607392", clazz: "flow", source: "startNode1", target: "costTaskNode1", sourceAnchor: 2, targetAnchor: 0 }]
      },
      jsonData: '',
      TestData: {
        nodes: [{ id: 'startNode1', x: 50, y: 200, label: '', clazz: 'start', },
          { id: 'startNode2', x: 50, y: 320, label: '', clazz: 'timerStart', },
          { id: 'taskNode1', x: 200, y: 200, label: '主任审批', clazz: 'userTask',  },
          { id: 'taskNode2', x: 400, y: 200, label: '经理审批', clazz: 'scriptTask',  },
          { id: 'gatewayNode', x: 400, y: 320, label: '金额大于1000', clazz: 'inclusiveGateway',  },
          { id: 'taskNode3', x: 400, y: 450, label: '董事长审批', clazz: 'receiveTask', },
          { id: 'catchNode1', x: 600, y: 200, label: '等待结束', clazz: 'signalCatch', },
          { id: 'endNode', x: 600, y: 320, label: '', clazz: 'end', }],
        edges: [{ source: 'startNode1', target: 'taskNode1', sourceAnchor:1, targetAnchor:3, clazz: 'flow' },
          { source: 'startNode2', target: 'gatewayNode', sourceAnchor:1, targetAnchor:3, clazz: 'flow' },
          { source: 'taskNode1', target: 'catchNode1', sourceAnchor:0, targetAnchor:0, clazz: 'flow' },
          { source: 'taskNode1', target: 'taskNode2', sourceAnchor:1, targetAnchor:3, clazz: 'flow' },
          { source: 'taskNode2', target: 'gatewayNode', sourceAnchor:1, targetAnchor:0, clazz: 'flow' },
          { source: 'taskNode2', target: 'taskNode1', sourceAnchor:2, targetAnchor:2, clazz: 'flow' },
          { source: 'gatewayNode', target: 'taskNode3', sourceAnchor:2, targetAnchor:0, clazz: 'flow' },
          { source: 'gatewayNode', target: 'endNode', sourceAnchor:1, targetAnchor:2, clazz: 'flow'},
          { source: 'taskNode3', target: 'endNode', sourceAnchor:1, targetAnchor:1, clazz: 'flow' },
          { source: 'catchNode1', target: 'endNode', sourceAnchor:1, targetAnchor:0, clazz: 'flow' }]
      },
      demoData1:{
        nodes: [{ id: 'startNode1', x: 50, y: 200, label: '', clazz: 'start', },
          { id: 'startNode2', x: 50, y: 320, label: '', clazz: 'timerStart', },
          { id: 'taskNode1', x: 200, y: 200, label: '主任审批', clazz: 'userTask',  },
          { id: 'taskNode2', x: 400, y: 200, label: '经理审批', clazz: 'scriptTask', active:true },
          { id: 'gatewayNode', x: 400, y: 320, label: '金额大于1000', clazz: 'gateway',  },
          { id: 'taskNode3', x: 400, y: 450, label: '董事长审批', clazz: 'receiveTask', },
          { id: 'catchNode1', x: 600, y: 200, label: '等待结束', clazz: 'signalCatch', },
          { id: 'endNode', x: 600, y: 320, label: '', clazz: 'end', }],
        edges: [{ source: 'startNode1', target: 'taskNode1', sourceAnchor:1, targetAnchor:3, clazz: 'flow' },
          { source: 'startNode2', target: 'gatewayNode', sourceAnchor:1, targetAnchor:3, clazz: 'flow' },
          { source: 'taskNode1', target: 'catchNode1', sourceAnchor:0, targetAnchor:0, clazz: 'flow' },
          { source: 'taskNode1', target: 'taskNode2', sourceAnchor:1, targetAnchor:3, clazz: 'flow' },
          { source: 'taskNode2', target: 'gatewayNode', sourceAnchor:1, targetAnchor:0, clazz: 'flow' },
          { source: 'taskNode2', target: 'taskNode1', sourceAnchor:2, targetAnchor:2, clazz: 'flow' },
          { source: 'gatewayNode', target: 'taskNode3', sourceAnchor:2, targetAnchor:0, clazz: 'flow' },
          { source: 'gatewayNode', target: 'endNode', sourceAnchor:1, targetAnchor:2, clazz: 'flow'},
          { source: 'taskNode3', target: 'endNode', sourceAnchor:1, targetAnchor:1, clazz: 'flow' },
          { source: 'catchNode1', target: 'endNode', sourceAnchor:1, targetAnchor:0, clazz: 'flow' }]
      },
      candidateUsers: [{id:'1',name:'Tom'},{id:'2',name:'Steven'},{id:'3',name:'Andy'}],
      candidateGroups: [{id:'1',name:'Manager'},{id:'2',name:'Security'},{id:'3',name:'OA'}],
      categorys: [{id:'1',name:'Common'},{id:'2',name:'Subsidy'},{id:'3',name:'Maintain'}],
    }
  },
  mounted() {
  },
  methods: {
    view() {
      this.jsonData = this.$refs['aiflow'].graph.save();
      console.log(this.jsonData);
      //"{"nodes":[{"shape":"start-node","id":"startNode1","x":349,"y":53,"label":"","clazz":"start","style":{},"size":[30,30]}],"edges":[],"combos":[],"groups":[]}"
      this.modalVisible = true;
    },
    uploadFile() {
      this.dialogVisible = true;
    },
    uploadJson() {
      // 打开文件选择窗口
      const input = document.createElement('input');
      input.type = 'file';
      // 限定文件类型
      input.accept = '.json';
      input.click();
      const that = this;
      that.dialogVisible = false;
      input.onchange = function () {
        const file = input.files[0]
        // FileReader实例
        const reader = new FileReader()
        // 读取文件
        reader.readAsText(file, 'UTF-8')
        // 处理数据
        reader.onload = function (event) {
          try {
            const fileString = event.target.result
            const fileJson = JSON.parse(fileString)
            // 清空画布
            that.$refs['aiflow'].graph.clear()
            // 设置数据
            that.$refs['aiflow'].graph.data(that.$refs['aiflow'].initShape(fileJson))
            // 渲染
            that.$refs['aiflow'].graph.render()
          } catch (e) {
            // 提示
            that.$notify({
              title: '提示',
              message: '上传报错'
            });
            console.error('AIFLOW EDITOR ERROR:: upload JSON failed!', e)
          }
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.preview-json {
  text-align: left;
  background: #2d2d2d;
  color: #cccccc;
  padding: 10px;
  white-space: pre-wrap;
}
</style>
