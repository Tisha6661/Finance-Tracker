export const Steps = [
    {
      id: "introduction",
      attachTo: { element: "#navIcon", on: "bottom" },
      buttons: [
        {
          classes: "btn btn-error btn-sm mr-2 mt-1", // Added mr-2 for margin-right
          text: "Exit",
          action() {
            return this.cancel();
          },
        },
        {
          classes: "btn btn-success btn-sm mt-1", // Used btn-sm for smaller buttons
          text: "Next",
          action() {
            return this.next();
          },
        },
      ],
      title:
        "<span class='text-lg font-bold'>Welcome to Your Personalized Fiannce Tracker 👋</span>", // Added classes for larger, bold title
      text: [
        "<p> A finance tracker application that helps individuals to make informed decisions about their finances, optimize their investments, plan for the future, and manage debts effectively. </p>",
      ],
    },
    {
      id: "PersonalInfo",
      attachTo: { element: "#PersonalInfo", on: "bottom" },
      buttons: [
        {
          classes: "btn btn-error btn-sm mr-2 mt-2 ",
          text: "Exit",
          action() {
            return this.cancel();
          },
        },
        {
          classes: "btn btn-success btn-sm mt-2", 
          text: "Next",
          action() {
            return this.next();
          },
        },
      ],
      title: "<span class='text-lg font-bold'>Personal Information </span>", // Added classes for larger, bold title
      text: [
        "<p>Use the Personal Info block to see your given information </b></p>",
      ],
    },
    {
      id: "Blocks",
      attachTo: { element: "#analyticsBlocks", on: "right" },
      buttons: [
        {
          classes: "btn btn-error btn-sm mr-2 mt-2", // Added mr-2 for margin-right
          text: "Exit",
          action() {
            return this.cancel();
          },
        },
        {
          classes: "btn btn-success btn-sm mt-2", // Used btn-sm for smaller buttons
          text: "Next",
          action() {
            return this.next();
          },
        },
      ],
      title: "<span class='text-lg font-bold'>Analytics Block </span>", // Added classes for larger, bold title
      text: [
        "<p>Get to know Simple Interest, Compound Interest, Monthly Morgage Payments, Loan Amortization and Effective Annual Rate on your loan. </p>",
      ],
    },
    {
      id: "BmrBlock",
      attachTo: { element: "#gall", on: "left" },
      buttons: [
        {
          classes: "btn btn-error btn-sm mr-2 mt-2", // Added mr-2 for margin-right
          text: "Exit",
          action() {
            return this.cancel();
          },
        },
        {
          classes: "btn btn-success btn-sm mt-2", 
          text: "Start Journey",
          action() {
            return this.complete();
          },
        },
      ],
      title: "<span class='text-lg font-bold'> Wishing You a happy Journey</span>",
      text: [
        "<p>Keep a track of your finances and loans properly.</p>",
      ],
    },
  ];
