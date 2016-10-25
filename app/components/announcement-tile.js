import Ember from 'ember';

export default Ember.Component.extend({
  isAnnouncementShowing: false,
  actions: {
    announcementShow: function() {
      this.set('isAnnouncementShowing', true);
    },
    announcementHide: function() {
      this.set('isAnnouncementShowing', false);
    },
    delete(announcement) {
      if (confirm('Are you sure you want to delete this announcement?')) {
        this.sendAction('destroyAnnouncement', announcement);
      }
    }
  }
});
