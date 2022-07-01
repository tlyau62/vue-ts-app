<script lang="tsx">
import Vue, { PropType } from "vue";
import { ITest as Abstract } from "../abstracts/ITest";

export const Test = Vue.extend({
  props: {
    msg: {
      type: String as PropType<string | undefined>,
    },
  },
  methods: {
    printMsg() {
      console.log(this.msg);
    },
  },
  render() {
    return <div>{this.msg}!!!</div>;
  },
}) as unknown as Abstract;

export const ITest: Abstract = "ITest" as any;

export default Test;
</script>
