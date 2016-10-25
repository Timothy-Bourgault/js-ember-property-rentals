import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
   announcementFormShow() {
     this.set('addNewAnnouncement', true);
   },
   saveAnnouncement1() {
      var params = {
        message: this.get('message'),
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('saveAnnouncement2', params);
      this.set('message', '');
    }
 }
});
