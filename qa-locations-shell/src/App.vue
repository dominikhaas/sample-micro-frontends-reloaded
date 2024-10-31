<script lang="ts" setup>
import { ref } from "vue";

const name = ref("qa-locations");

import {logWarn} from "loggingLib/Logger"


logWarn("shell", "test3")

//logWarn("Shell", "Booted application")
</script>
<template>
  <v-app>
    <v-app-bar>
      <h1>{{ name }}</h1>
    </v-app-bar>

      <v-navigation-drawer permanent>
        <v-list nav>
          <v-list-item link to="/locations" prepend-icon="mdi-home" title="Locations"></v-list-item>
          <v-list-item link to="/profile/1337" prepend-icon="mdi-account-box" title="Your profile"></v-list-item>
        </v-list>
      </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
