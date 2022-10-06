<template>
  
  <q-layout
    style="border: 1px solid green; height: 100%;"
    view="lHh Lpr lFf"
  >
    <q-header elevated>
      <q-toolbar>
        <q-btn
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
          dense
          flat
          round
        />

        <q-toolbar-title>Biweekly Estimated Collections</q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Welcome</q-item-label>

  
      </q-list>
    </q-drawer>

    
    <q-page-container>
      <router-view />
    </q-page-container>
    
  </q-layout>
</template>