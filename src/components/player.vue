<template>
    <div class="w-full flex items-center">
        <div 
            class="w-[40px] text-center py-0.5 bg-white border-l border-slate-300"
            :class="
                { 'border-b border-slate-300': index !== 7 && index !== 3 }
            "
        >
            <span class="text-xs" 
                :class="
                    { 'opacity-50': index > 3}
                "
            >
                {{ model.status?.position?.displayName }}
            </span>
        </div>
        <div 
            class="flex-1 px-4 py-0.5 bg-white border-l border-slate-300 whitespace-nowrap text-ellipsis overflow-hidden"
            :class="
                { 'border-b border-slate-300': index !== 7 && index !== 3 }
            "
        >
            <span :class="{ 'opacity-50': index > 3}">
                {{ model.athlete?.displayName }}
            </span>
        </div>
        <div 
            class="w-[40px] text-center py-0.5 bg-white border-l border-slate-300"
            :class="
                { 'border-b border-slate-300': index !== 7 && index !== 3 }
            "
        >
            <span class="text-xs" 
                :class="
                    { 'opacity-50': index > 3},
                    { 'text-masters-500': model.status?.type?.name === 'STATUS_IN_PROGRESS' }
                "
            >
                {{ model.status?.thru }}
            </span>
        </div>
        <div class="w-[54px] py-0.5 flex justify-center items-center bg-masters-900 text-masters-200"
            :class="
                { 'border-t border-masters-900': index === 0 },
                { 'border-b border-masters-900': index !== 7 && index !== 3 }
            "
        >
            <span :class="{ 'opacity-50': index > 3}">
                {{ model.statistics[0]?.displayValue }}
            </span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    model: {
        type: Object,
        default: () => ({}),
    },
    index: {
        type: String,
        default: null
    }
});
</script>

<style lang="scss" scoped>

</style>