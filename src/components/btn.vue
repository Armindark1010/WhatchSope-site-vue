<template>
    <div>
        <button class="text-white bg-transparent outline-none rounded-3xl py-2 text-sm px-4 border">{{ text }}</button>
    </div>
</template>
<script>
export default{

    name:'alert',

    props:["text"]

}
</script>