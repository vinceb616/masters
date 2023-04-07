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
            <span
                :class="
                    { 'opacity-50': index > 3}
                "
            >
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
        <div 
            class="w-[40px] text-center py-0.5 bg-white border-l border-slate-300"
            :class="
                { 'border-b border-slate-300': index !== 7 && index !== 3 }
            "
        >
            <span class="text-xs" 
                :class="
                    { 'opacity-50': index > 3},
                    { 'text-masters-300': negativeScore },
                    { 'text-masters-500': positiveScore }
                "
            >
                {{ model.linescores[1]?.displayValue }}
            </span>
        </div>
        <div class="w-[54px] py-0.5 flex justify-center items-center text-masters-200"
            :class="
                { 'border-t': index === 0 },
                { 'border-b': index !== 7 && index !== 3 },
                { 'bg-masters-300 border-masters-300': model.statistics[0]?.value < 0 },
                { 'bg-masters-900 border-masters-900': model.statistics[0]?.value > -1 }
            "
        >
            <span :class="{ 'opacity-50': index > 3}">
                <template v-if="model.status?.displayValue === 'WD'">
                    {{ model.status?.displayValue }}
                </template>
                <template v-else>
                    {{ model.statistics[0]?.displayValue }}
                </template>
            </span>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
    model: {
        type: Object,
        default: () => ({}),
    },
    index: {
        type: Number,
        default: null
    }
});

const negativeScore = computed(() => {
    const letter = props.model.linescores[1]?.displayValue.charAt(0);

    if (props.model.linescores[1]?.displayValue !== '-' && letter === '-') {
        return true;
    } else {
        return false;
    }
});

const positiveScore = computed(() => {
    const letter = props.model.linescores[1]?.displayValue.charAt(0);
    console.log('letter ', props.model.linescores[1]?.length);

    if (letter === '+') {
        return true;
    } else {
        return false;
    }
});
</script>

<style lang="scss" scoped>

</style>