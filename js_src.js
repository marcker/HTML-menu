/* HTML menu
   by Marcker - marckfree@gmail.com
   MIT License - < http://opensource.org/licenses/mit-license.php > */

var d = document;
var w = window;

w.onload = function () {
	menu = d.getElementById('menu');
	if (menu) {
		li = [];
		a = []
		var json_object = {'links':[
	 								{'link':'Home','url':'home.html'},
									{'link':'Contato','url':'contato.html'},
									{'link':'Biografia','url':'biografia.html'},
									{'link':'Equipe','url':'equipe.html'},
									{'link':'Skate','url':'skate.html'}
								   ]
		};
		var n_links = json_object.links.length;

		if (n_links) {
			for (i = 0; i <= n_links-1; i++) {
				//create list ('li' tag)
				li[i] = d.createElement('li');
				li[i].setAttribute('id', 'link' + i);		
				menu.appendChild(li[i]);
				
				//create hyperlinks ('a' tag)
				a[i] = d.createElement('a');
				a[i].setAttribute('href', json_object.links[i].url);
				a[i].setAttribute('title', 'Acesse a página ' + json_object.links[i].link.toUpperCase());		
				a[i].innerHTML = json_object.links[i].link; 
				item_menu = d.getElementById('link' + [i]);
				item_menu.appendChild(a[i]);
			}	
		}
		else {
			d.write('<p>Erro ao criar o menu (Itens ou Links faltando).</p>');
			d.write('<p><a href="javascript:window.location.reload();">Atualize</a> a página caso já tenha corrigido o problema.</p>');
		}	
	}
	else {
		d.write('<p>Erro ao criar o menu (ID menu não existe na página).</p>');
		d.write('<p><a href="javascript:window.location.reload();">Atualize</a> a página caso já tenha corrigido o problema.</p>');
	}	
}