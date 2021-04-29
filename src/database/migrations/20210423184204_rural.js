
exports.up = function(knex) {
  return knex.schema.createTable('rural', function(table){
    table.string('aps');
    table.string('bairro');
    table.string('banco');
    table.string('cep');
    table.string('cessaodebenefcioadminist');
    table.string('cgcentidade');
    table.string('clientela');
    table.string('competncia');
    table.string('cpftitular');
    table.string('despacho');
    table.string('dtnascimento');
    table.string('empregador');
    table.string('endereo');
    table.string('espcie');
    table.string('faixaetria');
    table.string('formafiliao');
    table.string('gex');
    table.string('meiopagamento');
    table.string('motivocessaosuspenso');
    table.string('motivocessaosuspensonovo');
    table.string('municpio');
    table.string('nb');
    table.string('nbanterior');
    table.string('nittitular');
    table.string('nomeentidade');
    table.string('nomeinstituidor');
    table.string('nomeme');
    table.string('nomeprocurador');
    table.string('nometitular');
    table.string('rgopagador');
    table.string('ramoatividade');
    table.string('sexo');
    table.string('situaobenefcio');
    table.string('tipobenefcio');
    table.string('uf');
    table.string('idadeatual');
    table.string('vlmr');
    table.string('vlrmi');
    table.string('vlrmiconvertido');
    table.string('datanascimento');
    table.string('dtddb');
    table.string('dtder');
    table.string('dtdib');
    table.string('dtdip');
    table.string('dtbito');
    table.string('dtrenovsenha');
    table.string('dtltimamacia');
    
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('rural');
};
