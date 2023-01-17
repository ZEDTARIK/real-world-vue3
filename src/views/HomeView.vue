<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  name: "HomeView",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 54151454,
          category: "animal welfare",
          title: "Cat Adoption Day",
          description: "Find your new feline friends at this event",
          location: "Meow Town",
          date: "January 28, 2023",
          time: "12:00",
          petsAllowed: true,
          organizer: "Kat Laydee",
        },
        {
          id: 31251564,
          category: "food",
          title: "Communication Grding Day",
          description: "Find your new feline friends at this event",
          location: "Meow Town",
          date: "March 15, 2022",
          time: "12:00",
          petsAllowed: false,
          organizer: "Kat Laydee",
        },
        {
          id: 4564565741,
          category: "Somthing",
          title: "VueJs3 Training",
          description: "Find your new feline friends at this event",
          location: "MORROCO Town",
          date: "Descember 12, 2022",
          time: "12:00",
          petsAllowed: true,
          organizer: "Kat Laydee",
        },
      ],
    };
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
