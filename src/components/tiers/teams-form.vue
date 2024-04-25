<template>
  <div class="flex justify-center mb-12">
    <form
      v-if="!state.formCompleted"
      ref="form"
      @submit.prevent="sendEmail"
      class="w-full"
    >
      <div class="flex flex-col space-y-4">
        <h2
          class="flex justify-center text-xs font-medium border-t border-b px-4 text-tournament-300 border-tournament-900"
        >
          Signup
        </h2>
        <div class="flex flex-col space-y-2">
          <label for="team" class="text-sm">First Name</label>
          <input
            v-model="state.firstName"
            type="text"
            name="first_name"
            class="appearance-none bg-white py-2 px-3 rounded"
            required
          />
        </div>
        <div class="flex flex-col space-y-2">
          <label for="team" class="text-sm">Last Name</label>
          <input
            v-model="state.lastName"
            type="text"
            name="last_name"
            class="appearance-none bg-white py-2 px-3 rounded"
            required
          />
        </div>
        <div class="flex flex-col space-y-2">
          <label for="team" class="text-sm">Email</label>
          <input
            type="email"
            name="user_email"
            class="appearance-none bg-white py-2 px-3 rounded"
            required
          />
        </div>
        <h2
          class="flex justify-center text-xs font-medium border-t border-b px-4 text-tournament-300 border-tournament-900"
        >
          Create your team
        </h2>
        <div class="flex flex-col space-y-2">
          <label class="text-sm">Tier 1 Player</label>
          <div class="select-wrapper">
            <select
              class="appearance-none bg-white py-2 pl-3 pr-10 rounded w-full"
              name="tier_one_player"
              required
            >
              <option></option>
              <option value="Scottie Scheffler">Scottie Scheffler</option>
              <option value="Rory McIlroy">Rory McIlroy</option>
              <option value="Jon Rahm">Jon Rahm</option>
              <option value="Xander Schauffele">Xander Schauffele</option>
              <option value="Hideki Matsuyama">Hideki Matsuyama</option>
              <option value="Brooks Koepka">Brooks Koepka</option>
              <option value="Jordan Spieth">Jordan Spieth</option>
              <option value="Joaquin Niemann">Joaquin Niemann</option>
              <option value="Ludvig Aberg">Ludvig Aberg</option>
              <option value="Viktor Hovland">Viktor Hovland</option>
              <option value="Matt Fitzpatrick">Matt Fitzpatrick</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <label class="text-sm">Tier 2 Player</label>

          <div class="select-wrapper">
            <select
              class="appearance-none bg-white py-2 pl-3 pr-10 rounded w-full"
              name="tier_two_player"
              required
            >
              <option></option>
              <option value="Bryson DeChambeau">Bryson DeChambeau</option>
              <option value="Tony Finau">Tony Finau</option>
              <option value="Patrick Cantlay">Patrick Cantlay</option>
              <option value="Dustin Johnson">Dustin Johnson</option>
              <option value="Will Zalatoris">Will Zalatoris</option>
              <option value="Wyndham Clark">Wyndham Clark</option>
              <option value="Tommy Fleetwood">Tommy Fleetwood</option>
              <option value="Justin Thomas">Justin Thomas</option>
              <option value="Cameron Smith">Cameron Smith</option>
              <option value="Sahith Theegala">Sahith Theegala</option>
              <option value="Collin Morikawa">Collin Morikawa</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <label class="text-sm">Tier 3 Player</label>

          <div class="select-wrapper">
            <select
              class="appearance-none bg-white py-2 pl-3 pr-10 rounded w-full"
              name="tier_three_player"
              required
            >
              <option></option>
              <option value="Cameron Young">Cameron Young</option>
              <option value="Tyrrell Hatton">Tyrrell Hatton</option>
              <option value="Russell Henley">Russell Henley</option>
              <option value="Max Homa">Max Homa</option>
              <option value="Si Woo Kim">Si Woo Kim</option>
              <option value="Shane Lowry">Shane Lowry</option>
              <option value="Brian Harman">Brian Harman</option>
              <option value="Jason Day">Jason Day</option>
              <option value="Corey Conners">Corey Conners</option>
              <option value="Patrick Reed">Patrick Reed</option>
              <option value="Adam Scott">Adam Scott</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <label class="text-sm">Tier 4 Player</label>

          <div class="select-wrapper">
            <select
              class="appearance-none bg-white py-2 pl-3 pr-10 rounded w-full"
              name="tier_four_player"
              required
            >
              <option></option>
              <option value="Sam Burns">Sam Burns</option>

              <option value="Min Woo Lee">Min Woo Lee</option>

              <option value="Denny McCarthy">Denny McCarthy</option>

              <option value="Byeong Hun An">Byeong Hun An</option>

              <option value="Akshay Bhatia">Akshay Bhatia</option>

              <option value="Sungjae Im">Sungjae Im</option>

              <option value="Sergio Garcia">Sergio Garcia</option>

              <option value="Justin Rose">Justin Rose</option>

              <option value="Harris English">Harris English</option>

              <option value="Tom Kim">Tom Kim</option>

              <option value="Tiger Woods">Tiger Woods</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <label class="text-sm">Tier 5 Player</label>

          <div class="select-wrapper">
            <select
              class="appearance-none bg-white py-2 pl-3 pr-10 rounded w-full"
              name="tier_five_player"
              required
            >
              <option></option>
              <option value="Rickie Fowler">Rickie Fowler</option>

              <option value="Chris Kirk">Chris Kirk</option>

              <option value="Adrian Meronk">Adrian Meronk</option>

              <option value="Stephan Jaeger">Stephan Jaeger</option>

              <option value="Sepp Straka">Sepp Straka</option>

              <option value="Kurt Kitayama">Kurt Kitayama</option>

              <option value="Keegan Bradley">Keegan Bradley</option>

              <option value="Adam Hadwin">Adam Hadwin</option>

              <option value="Nicolai Hojgaard">Nicolai Hojgaard</option>

              <option value="Nick Taylor">Nick Taylor</option>

              <option value="Erik Van Rooyen">Erik Van Rooyen</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <label class="text-sm">Tier 6 Player</label>

          <div class="select-wrapper">
            <select
              class="appearance-none bg-white py-2 pl-3 pr-10 rounded w-full"
              name="tier_six_player"
              required
            >
              <option></option>
              <option value="Thorbjorn Olesen">Thorbjorn Olesen</option>

              <option value="Austin Eckroat">Austin Eckroat</option>

              <option value="Matthieu Pavon">Matthieu Pavon</option>

              <option value="Taylor Moore">Taylor Moore</option>

              <option value="Ryan Fox">Ryan Fox</option>

              <option value="Phil Mickelson">Phil Mickelson</option>

              <option value="J.T. Poston">J.T. Poston</option>

              <option value="Eric Cole">Eric Cole</option>

              <option value="Emiliano Grillo">Emiliano Grillo</option>

              <option value="Adam Schenk">Adam Schenk</option>

              <option value="Jake Knapp">Jake Knapp</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <label class="text-sm">Tier 7 Player</label>

          <div class="select-wrapper">
            <select
              class="appearance-none bg-white py-2 pl-3 pr-10 rounded w-full"
              name="tier_seven_player"
              required
            >
              <option></option>
              <option value="Gary Woodland">Gary Woodland</option>

              <option value="Lucas Glover">Lucas Glover</option>

              <option value="Cam Davis">Cam Davis</option>

              <option value="Nick Dunlap">Nick Dunlap</option>

              <option value="Luke List">Luke List</option>

              <option value="Charl Schwartzel">Charl Schwartzel</option>

              <option value="Bubba Watson">Bubba Watson</option>

              <option value="Lee Hodges">Lee Hodges</option>

              <option value="Ryo Hisatsune">Ryo Hisatsune</option>

              <option value="Peter Malnati">Peter Malnati</option>

              <option value="Zach Johnson">Zach Johnson</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <label class="text-sm">Tier 8 Player</label>

          <div class="select-wrapper">
            <select
              class="appearance-none bg-white py-2 pl-3 pr-10 rounded w-full"
              name="tier_eight_player"
              required
            >
              <option></option>
              <option value="Grayson Murray">Grayson Murray</option>

              <option value="Danny Willett">Danny Willett</option>

              <option value="Camilo Villegas">Camilo Villegas</option>

              <option value="Christo Lamprecht">Christo Lamprecht</option>

              <option value="Stewart Hagestad">Stewart Hagestad</option>

              <option value="Santiago De la Fuente">
                Santiago De la Fuente
              </option>

              <option value="Vijay Singh">Vijay Singh</option>

              <option value="Mike Weir">Mike Weir</option>

              <option value="Jose Maria Olazabal">Jose Maria Olazabal</option>

              <option value="Fred Couples">Fred Couples</option>

              <option value="Neal Shipley">Neal Shipley</option>

              <option value="Jasper Stubbs">Jasper Stubbs</option>
            </select>
          </div>
        </div>
      </div>

      <div class="flex mt-12">
        <button
          type="submit"
          class="px-4 py-2 w-full bg-tournament-300 text-white rounded cursor-pointer hover:bg-tournament-300 hover:opacity-80 transition-all ease-in-out duration-300"
        >
          Register Team
        </button>
      </div>
    </form>
    <div v-if="state.formSuccess" class="text-tournament-900">
      {{ state.firstName }} {{ state.lastName }} your team has been submitted.
      Please Venmo $20 to complete entry
    </div>
    <div v-if="state.formError" class="text-tournament-300">
      Error submitting your team. Please refresh the page and try again
    </div>
  </div>

  <div class="flex align-center space-x-2 w-full justify-center">
    <a
      href="https://venmo.com/u/Vincent-Bolhuis"
      class="bg-[#0074DE] px-4 py-4 rounded-2xl border-[#0074DE] text-white font-semibold hover:text-white hover:opacity-80 min-w-[250px] text-center"
      >Venmo Me</a
    >
  </div>
</template>

<script setup>
import emailjs from "@emailjs/browser";
import { onMounted, ref, reactive } from "vue";

const form = ref(null);
const state = reactive({
  formSuccess: false,
  formError: false,
  formCompleted: false,
  firstName: "",
  lastName: "",
});

const sendEmail = () => {
  emailjs
    .sendForm("service_bat2mqj", "template_v3cq6ow", form.value, {
      publicKey: "oDe0pgtP4-xz3Kko8",
    })
    .then(
      () => {
        state.formCompleted = true;
        state.formSuccess = true;
        setCookie("firstName", state.firstName, {
          expires: new Date("10"),
        });
        setCookie("lastName", state.lastName, {
          expires: new Date("10"),
        });
      },
      (error) => {
        state.formCompleted = true;
        state.formError = true;
      }
    );
};

const getCookie = (cname) => {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");

  for (const item of ca) {
    const c = item.trim();

    if (c.startsWith(name)) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
};

const setCookie = (cname, cvalue, exdays) => {
  const date = new Date();
  date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
};

const checkForRegisteredTeam = () => {
  const firstName = getCookie("firstName");
  const lastName = getCookie("lastName");
  if (firstName && lastName) {
    state.firstName = firstName;
    state.lastName = lastName;
    state.formCompleted = true;
    state.formSuccess = true;
  }
};

onMounted(() => {
  checkForRegisteredTeam();
});
</script>

<style lang="scss" scoped>
.select-wrapper {
  position: relative;
}
.select-wrapper:after {
  content: "";
  display: block;
  height: 24px;
  width: 24px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-image: url(../../assets/chevron-down.svg);
  background-size: 24px 24px;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
