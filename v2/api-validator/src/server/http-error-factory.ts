import { FastifyReply } from 'fastify';
import { BadRequestError, GeneralError } from '../client/generated';

export function notFound(reply: FastifyReply): FastifyReply {
  const errorData: GeneralError = {
    message: 'Entity not found',
    errorType: GeneralError.errorType.NOT_FOUND,
  };
  return reply.code(404).send(errorData);
}

export function badRequest(reply: FastifyReply, errorData: BadRequestError): FastifyReply {
  return reply.code(400).send(errorData);
}
