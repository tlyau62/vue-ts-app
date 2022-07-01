<script lang="tsx">
import Vue, { PropType } from "vue";

export const Test = Vue.extend({
  props: {
    msg: {
      type: String as PropType<string | undefined>,
    },
  },
  render() {
    return <div>{this.msg}!!!</div>;
  },
}) as unknown as (options: { msg: string }) => any;

export const ITest: typeof Test = "ITest" as any;

export default Test;
</script>
