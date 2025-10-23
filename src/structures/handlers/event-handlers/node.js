import { logger } from '#utils/logger';

export default class nodeHandler {
	constructor(client) {
		this.client = client;
		this.music = client.music;
		this.registeredEvents = new Map();
	}

	async register(event) {
		try {
			const listener = (...args) => {
				try {
					event.execute(...args, this.client.music, this.client);
				} catch (error) {
					logger.error(
						'PnodeEvent',
						`Error in event ${event.name}:`,
						error,
					);
				}
			};

			if (event.once) {
				this.music.lavalink.nodeManager.once(event.name, listener);
			} else {
				this.music.lavalink.nodeManager.on(event.name, listener);
			}

			this.registeredEvents.set(event.name, listener);
			return true;
		} catch (error) {
			logger.error(
				'nodeEvent',
				`Failed to register player event: ${event.name}`,
				error,
			);
			return false;
		}
	}

	async unregister(eventName) {
		if (this.registeredEvents.has(eventName)) {
			this.music.lavalink.nodeManager.removeListener(
				eventName,
				this.registeredEvents.get(eventName),
			);
			this.registeredEvents.delete(eventName);
		}
	}

	async unregisterAll() {
		for (const [eventName, listener] of this.registeredEvents) {
			this.music.lavalink.nodeManager.removeListener(eventName, listener);
		}
		this.registeredEvents.clear();
	}
}
