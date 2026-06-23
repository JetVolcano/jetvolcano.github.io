<template>
  <UApp>
    <div class="flex place-content-center translate-y-2.5">
      <PageHeader />
    </div>

    <UContainer class="translate-y-10 font-display">
      <div class="outline-2 outline-offset-12 outline-zinc-800 rounded-md">
        <b class="text-3xl font-bold text-neutral-700 dark:text-slate-200">
          <p class="translate-1">What I'm learning</p>
        </b>

        <TailwindMark />
        <RustMark />
      </div>
    </UContainer>
  </UApp>
</template>
