#!/usr/bin/env node

import { NodeContext, Runtime } from '@effect/platform-node';
import { Options, Command } from '@effect/cli';
import { Console, Effect } from 'effect';


const reproOptions = {
  watch: Options.directory('watch').pipe(Options.repeated),
} as const;

const main = Command.
  make(
    'repro',
    reproOptions,
    (rawOpts) => Effect.gen(function * (_) {
      yield * _(Console.log("If you see this, then repro failed"));
    })
  ).
  pipe(
    Command.withDescription('asdf'),
    Command.run({
      name: "Repro",
      version: "N/A",
    }),
  );

console.debug(process.argv.slice(2));

Effect.
  suspend(() => main(process.argv.slice(2))).
  pipe(
    Effect.provide(NodeContext.layer),
    Runtime.runMain,
  );
