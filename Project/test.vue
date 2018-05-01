<template>
    
</template>

<script>
    export default {
        name: "test"
    }








    var mixin = {
        data: function () {
            return {
                message: 'hello',
                foo: 'abc'
            }
        }
    }

    new Vue({
        mixins: [mixin],
        data: function () {
            return {
                message: 'goodbye',
                bar: 'def'
            }
        },
        created: function () {
            console.log(this.$data)
// => { message: "goodbye", foo: "abc", bar: "def" }
        }
    })
    var mixin = {
        created: function () {
            console.log('混入对象的钩子被调用')
        }
    }

    new Vue({
        mixins: [mixin],
        created: function () {
            console.log('组件钩子被调用')
        }
    })


    var mixin = {
        methods: {
            foo: function () {
                console.log('foo')
            },
            conflicting: function () {
                console.log('from mixin')
            }
        }
    }

    var vm = new Vue({
        mixins: [mixin],
        methods: {
            bar: function () {
                console.log('bar')
            },
            conflicting: function () {
                console.log('from self')
            }
        }
    })

    vm.foo() // => "foo"
    vm.bar() // => "bar"
    vm.conflicting() // => "from self"
    // => "混入对象的钩子被调用"
    // => "组件钩子被调用"




    createElement(
        // {String | Object | Function}
        // HTML 标签名称，或组件选项对象，
        // 或一个最终解析(resolve)为 HTML 标签名称或组件选项对象的异步函数。必选参数。
        'div',

        // {Object}
        // 一个数据对象，
        // 和模板中用到的属性相对应。可选参数。
        {
            // （详情请看下一节）
        },

        // {String | Array}
        // 子虚拟 DOM 节点(children VNode)组成，或使用 `createElement()` 生成，
        // 或使用字符串的“文本虚拟 DOM 节点(text VNode)”。可选参数。
        [
            'Some text comes first.',
            createElement('h1', 'A headline'),
            createElement(MyComponent, {
                props: {
                    someProp: 'foobar'
                }
            })
        ]
    )





    Array.apply(null, { length: 20 }).map(function () {
        return createElement('p', 'hi')
    })


</script>

<style scoped>

</style>






