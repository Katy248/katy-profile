<script setup>
import { TECHNOLOGIES, PROJECTS, LINKS } from '../data'
</script>

<template>
  <main class="flex flex-col gap-16">
    <section>
      <img
        src="https://gravatar.com/avatar/938305bc68133dbf82e72c913c2bd6b3?size=256"
      />
      <h1 class="mb-8">
        Katy248 <span class="text-[#908caa]">(a.k.a. Anton)</span>
      </h1>
      <p>Who am I: junior dev, main fan of milk, Staerf's pristine patriot</p>

      <blockquote title="Cool quote" class="italic pt-2 ps-2">
        It's a men's world, so a man I choose
      </blockquote>
    </section>

    <section>
      <h2>My links</h2>
      <div class="flex flex-wrap gap-4">
        <div v-for="link in LINKS" :key="link.name">
          <a :href="link.url">[ {{ link.name }} ]</a>
        </div>
      </div>
    </section>

    <section>
      <h2>Technologies that I use</h2>
      <div class="flex flex-wrap gap-4">
        <div
          v-for="technology in TECHNOLOGIES"
          :key="technology.id"
          class="bg-[#26233a] px-1"
        >
          {{ technology.name }}
        </div>
      </div>
    </section>

    <section>
      <h2 class="">My projects</h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <div
          v-for="project in PROJECTS"
          :key="project.id"
          class="bg-[#1f1d2e] p-2 flex flex-col justify-between"
        >
          <div class="text-[#eb6f92]">
            {{ project.name }}
            <span v-if="project.contributor" class="text-[#ebbcba] italic">
              (just contributor)
            </span>
          </div>
          <div class="">{{ project.description }}</div>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="technology in project.technologies"
              :key="technology.name"
              class="bg-[#26233a] px-1"
            >
              {{ technology.name }}
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <a
              v-if="project.url"
              :href="project.url"
              target="_blank"
              class="text-[#f6c177]"
              >[ source  ]
            </a>
            <a
              v-if="project.previewUrl"
              :href="project.previewUrl"
              target="_blank"
              class="text-[#f6c177]"
              >[ view  ]
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
@import '../assets/app.css';
h2 {
  @apply text-[#ebbcba] pb-4;
}
a {
  @apply active:underline hover:bg-[#26233a];
}
</style>
