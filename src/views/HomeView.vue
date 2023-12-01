<!-- eslint-disable vue/no-unused-components -->
<template>
  <div class="events">
    <h2>Event For Good</h2>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'HomeView',
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 15487,
          category: 'Community Gardening',
          title: 'Community SETEL',
          description: 'Community Join us we tend to th community members',
          location: 'Morocco',
          date: 'March 1, 2015',
          time: '10:00',
          organizer: 'Zouhair ETTARAK',
        },
        {
          id: 136478,
          category: 'JAva Developper',
          title: 'Learn Java && Spring Boot',
          description: 'Community to larn java and spring security',
          location: 'Morocco',
          date: 'April 1, 2022',
          time: '06:00',
          organizer: 'Zouhair ETTARAK',
        },
        {
          id: 745154,
          category: 'Learn VueJs',
          title: 'Learn Vue Js && JavaScript',
          description: 'learn vuejs from web site and practise itself',
          location: 'China',
          date: 'March 1, 2023',
          time: '10:00',
          organizer: 'EVAN VUEJS',
        },
      ],
    }
  },
}
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
