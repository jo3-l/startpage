<template>
<a id="image-link" :href=link>Image</a>
</template>
<script>
export default {
    name: 'ImageLink',
    props: {
        link: String,
    }
}
</script>

<style scoped>
    #image-link {
        position: absolute;
        bottom: 18px;
        left: 18px;
        font-family: 'Roboto';
        font-size: 18px;
        color: white;
        text-decoration: none;
        padding-bottom: 1px;
        transform: translate(0, 5px);
        text-shadow: -0.2px -0.2px 0 , 0.2px -0.2px 0 var(--color), -0.2px 0.2px 0 var(--color), 0.2px 0.2px 0 var(--color); 
    }

    #image-link:hover {
        border-bottom: 1px solid white;
        padding-bottom: 0px;
    }
</style>