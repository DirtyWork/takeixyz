import { LightningElement, api } from 'lwc';

export default class SldsAlert extends LightningElement {
	@api variant = '';

	get variantClass() {
		const classBase = 'slds-notify slds-notify_alert';
		return this.variant === 'error'
			? `${classBase} slds-alert_error`
			: this.variant === 'warning'
			? `${classBase} slds-alert_warning`
			: this.variant === 'offline'
			? `${classBase} slds-alert_offline`
			: classBase;
	}

	get iconName() {
		return this.variant === 'error'
			? 'utility:error'
			: this.variant === 'warning'
			? 'utility:warning'
			: this.variant === 'offline'
			? 'utility:offline'
			: 'utility:info';
	}

	get iconVariant() {
		return this.variant !== 'warning' ? 'inverse' : '';
	}

	get buttonIconVariant() {
		return this.variant !== 'warning' ? 'bare-inverse' : 'bare';
	}
}
