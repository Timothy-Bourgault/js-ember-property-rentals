import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      announcements: this.store.findAll('announcement'),
      rentals: this.store.findAll('rental')
    });
  },

  setupController(controller, model) {
    controller.set('announcements', model.announcements);
    controller.set('rentals', model.rentals);
  },

  actions: {
    saveRental3(params){
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    },
    saveAnnouncement3(params){
      var newAnnouncement =
      this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('index');
    },
    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('index');
    }
  }
});
