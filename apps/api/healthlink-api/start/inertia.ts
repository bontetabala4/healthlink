import Inertia from '@adonisjs/inertia/services/main'

Inertia.share({
  errors: (ctx) => ctx.session.flashMessages.get('errors'),
}).version(() => Inertia.manifest.get('asset')!)
