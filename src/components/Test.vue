<script lang="tsx">
import Vue, { PropType } from "vue";

export interface ITest {
  (options: { msg: string }): any;
}

export const Test = Vue.extend({
  props: {
    msg: {
      type: String as PropType<string | undefined>,
    },
  },
  render() {
    return <div>{this.msg}!!!</div>;
  },
}) as unknown as ITest;

export const ITest: ITest = "ITest" as any;

export default Test;
</script>
