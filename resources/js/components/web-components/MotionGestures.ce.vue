<script setup>
import { motion } from "motion-v";
</script>

<template>
    <motion.div
        :whileHover="{ scale: 1.2 }"
        :whilePress="{ scale: 0.8 }"
        class="box"
    />
</template>

<style>
.box {
    width: 100px;
    height: 100px;
    background-color: #0d63f8;
    border-radius: 10px;
}
</style>
