const Notificationhelper = {
    sendNotification({ title, options }) {
        // TODO: check availability
        if (!this._checkAvailability()) {
            console.log('Notification not supported in this browser');
            return;
        }

        // TODO: check permissions. if not granted, send request
        if (!this._checkPermission()) {
            console.log('User did not yet granted permission');
            this._requestPermission();
            return;
        }
        
        // TODO: show notification
        this._showNotification({ title, options });
    },

    _checkAvailability() {
        return 'Notification' in window;
    },

    _checkPermission() {
        return Notification.permission === 'granted';
    },

    async _requestPermission() {
        const status = await Notification.requestPermission();

        if (status === 'denied') {
            console.log('Notification Denied');
        }

        if (status === 'default') {
            console.log('Permission closed');
        }
    },

    async _showNotification({title, options}) {
        const serviceWorkerRegistration = await navigator.serviceWorker.ready;
        serviceWorkerRegistration.showNotification(title, options)
    }
}

export default Notificationhelper;