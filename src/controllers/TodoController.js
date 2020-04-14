const Todo = require('./../model/Todo');

module.exports = {

    async index(request, response){
        const tarefas = await Todo.find();

        response.status(200).json(tarefas);
    },

    async store(request, response){
        const { description, done } = request.body;

        const tarefas = await Todo.create({
            description,
            done
        });

        response.status(201).json(tarefas);
    },

    async update (request, response){
        try {
          await Todo.findByIdAndUpdate(request.params.id, request.body);
          response.status(200).send({
            message: 'Tarefa atualizada com sucesso!'
          });
        } catch (e) {
          response.status(400).send({message: 'Falha ao atualizar o usuário.'});
        }
    },

    async delete(request, response){

        try {
            await Todo.findByIdAndDelete(request.params.id);
            response.status(200).send({
                message: 'Tarefa excluída com sucesso!'
            });
        } catch (e) {
            response.status(400).send({
                message: 'Não foi possível excluir sua tarefa'
            });
        }    
    }
}