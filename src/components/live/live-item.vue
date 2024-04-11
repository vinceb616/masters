<template>
  <div class="w-full flex items-center">
    <div class="w-[50px] text-center py-0.5 bg-white border-b border-slate-300">
      <span class="text-xs">
        {{ model.status?.position?.displayName }}
      </span>
    </div>
    <div
      class="flex-1 px-2 py-0.5 bg-white border-b border-l border-slate-300 flex items-center overflow-hidden sm:space-x-2"
    >
      <span v-if="showPlayerId"> {{ model.athlete?.id }}</span>
      <span v-else class="hidden sm:flex w-4 h-auto">
        <img
          v-if="model.athlete?.flag.href"
          :src="model.athlete?.flag?.href"
          :alt="model.athlete?.flag?.alt"
          class="w-full"
        />
      </span>
      <span
        class="overflow-hidden text-ellipsis whitespace-nowrap sm:w-[calc(100%-24px)]"
      >
        {{ model.athlete?.shortName }}
      </span>
    </div>
    <div
      class="w-[50px] text-center py-0.5 bg-white border-l border-b border-slate-300"
    >
      <span
        class="text-xs"
        :class="{
          'text-tournament-100':
            model.status?.type?.name === 'STATUS_IN_PROGRESS',
        }"
      >
        <template v-if="model.status?.thru || model.status?.thru === 0">
          {{ model.status?.thru }}
        </template>
        <template v-else> - </template>
      </span>
    </div>
    <div
      class="w-[50px] text-center py-0.5 bg-white border-l border-b border-slate-300"
    >
      <span
        class="text-xs"
        :class="
          ({
            'text-tournament-300':
              negativeScore &&
              model.status?.displayValue !== 'WD' &&
              model.status?.displayValue !== 'CUT',
          },
          {
            'text-tournament-500':
              positiveScore &&
              model.status?.displayValue !== 'WD' &&
              model.status?.displayValue !== 'CUT',
          })
        "
      >
        <template
          v-if="
            model.status?.displayValue === 'WD' ||
            model.status?.displayValue === 'CUT'
          "
        >
          {{ model.status?.displayValue }}
        </template>
        <template
          v-else-if="
            model.linescores[model.linescores.length - 1]?.displayValue
          "
        >
          {{ model.linescores[model.linescores.length - 1]?.displayValue }}
        </template>
        <template
          v-else-if="
            model.status?.type?.name === 'STATUS_SCHEDULED' &&
            model.status?.teeTime
          "
        >
          <span class="text-[10px]">{{ teeTime }}</span>
        </template>
        <template v-else> - </template>
      </span>
    </div>
    <div
      class="w-[54px] py-0.5 flex justify-center items-center border-b text-tournament-200"
      :class="[
        {
          'bg-tournament-300 border-tournament-300':
            model.statistics[0]?.value < 0,
        },
        {
          'bg-tournament-900 border-tournament-900':
            model.statistics[0]?.value > -1,
        },
      ]"
    >
      <span>
        <template
          v-if="
            model.status?.displayValue === 'WD' ||
            model.status?.displayValue === 'CUT'
          "
        >
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
import { computed } from "vue";
import { DateTime } from "luxon";

const props = defineProps({
  model: {
    type: Object,
    default: () => ({}),
  },
  showPlayerId: {
    type: Boolean,
    default: false,
  },
});

const negativeScore = computed(() => {
  if (!props.model.linescores.displayValue) {
    return false;
  }
  const letter =
    props.model.linescores[
      props.model.linescores.length - 1
    ]?.displayValue.charAt(0);

  if (
    props.model.linescores[props.model.linescores.length - 1]?.displayValue !==
      "-" &&
    letter === "-"
  ) {
    return true;
  } else {
    return false;
  }
});

const positiveScore = computed(() => {
  if (!props.model.linescores.displayValue) {
    return false;
  }
  const letter =
    props.model.linescores[
      props.model.linescores.length - 1
    ]?.displayValue.charAt(0);

  if (letter === "+") {
    return true;
  } else {
    return false;
  }
});

const teeTime = computed(() => {
  let time = props.model.status.teeTime;
  if (time) {
    time = DateTime.fromISO(time);

    return time.toLocaleString(DateTime.TIME_SIMPLE);
  } else {
    return "-";
  }
});
</script>
