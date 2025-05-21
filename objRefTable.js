const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Acts.Scroll,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Text.Acts.SetVisible
	];
};
self.C3_JsPropNameTable = [
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{player: 0},
	{Sólido: 0},
	{chao: 0},
	{lava: 0},
	{moeda: 0},
	{porta: 0},
	{placar: 0},
	{premioFinal: 0},
	{fundo: 0},
	{matador: 0},
	{mensgFinal: 0},
	{moedas: 0}
];

self.InstanceType = {
	player: class extends self.ISpriteInstance {},
	chao: class extends self.ISpriteInstance {},
	lava: class extends self.ISpriteInstance {},
	moeda: class extends self.ISpriteInstance {},
	porta: class extends self.ISpriteInstance {},
	placar: class extends self.ITextInstance {},
	premioFinal: class extends self.ISpriteInstance {},
	fundo: class extends self.ISpriteInstance {},
	matador: class extends self.ISpriteInstance {},
	mensgFinal: class extends self.ITextInstance {}
}