<script lang="tsx">
import Vue from "vue";
import { ITest } from "./Test.vue";

export default Vue.extend({
  name: "HelloWorld",
  render() {
    return (
      <div>
        <h4>HIHI</h4>
        <ITest
          ref="test"
          msg={"1234"}
          onClick={() =>
            (this.$refs.test as unknown as typeof ITest).printMsg()
          }
        />
      </div>
    );
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
