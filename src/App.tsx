import { Github, FileVideo, Upload, Wand2 } from 'lucide-react'
import { Button } from "./components/ui/button";
import { Separator } from './components/ui/separator';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Slider } from './components/ui/slider';

export function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py3 flex items-center justify-between border-b-2">
        <h1 className="text-xl font-semibold">upload.ai</h1>

        <div className="py-1 flex items-center gap-6">
          <span className="text-sm text-muted-foreground">
            Desenvolvido Por Rodrigo Rodrigues
          </span>

          <Separator orientation="vertical" className="h-5"></Separator>

          <Button variant="outline" size="sm">
            <Github className='w-4 h-4 mr-2'></Github>
            GitHub
          </Button>
        </div>
      </div>

      <main className="flex flex-auto p-6 gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none text-sm text-muted-foreground leading-relaxed"
              placeholder="Inclua o pronpt para a IA..."
            />
            <Textarea
              className="resize-none text-sm text-muted-foreground leading-relaxed"
              placeholder="Resultado gerado pela IA..."
              readOnly
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Lembresse, você pode usar a variável <code className="text-violet-400">{'{trancripison}'}</code> para adiocionar o conteudo da transcrição do video selecionado.
          </p>

        </div>

        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-gray-800 text-sm flex-col gap-2	items-center justify-center text-muted-foreground hover:bg-primary/5"
            >
              <FileVideo className='w-4 h-4' />
              Selecione um Vídeo
            </label>

            <input type="file" id="video" accept="video/mp4" className="sr-only" />

            <Separator />

            <div className="space-y-2">
              <Label
                htmlFor="transcription_prompt"
                className="text-muted-foreground"
              >
                Pronpt de transcrição
              </Label>
              <Textarea
                id="transcription_prompt"
                className="min-h-20 leading-relaxed"
                placeholder="Inclua palavras-chaves mencionadas no vídeo separadas por vírgulas (,)"
              />

            </div>

            <Button
              type='submit'
              className='w-full'
            >
              Carregar vídeo
              <Upload className='w-4 h-4 ml-2' />
            </Button>

          </form>

          <Separator />

          <form className="space-y-6"></form>
            <div className='space-y-2'>
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Título do Youtube</SelectItem>
                  <SelectItem value="description">Descrição do Youtube</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className='space-y-2'>
              <Label>Modelo</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value={"gpt3.5"}
                  >
                    GPT3.5-turbo-16k
                  </SelectItem>
                </SelectContent>
              </Select>
              <span className='block text-xs text-muted-foreground italic'>
                Você poderá customizar essa poção em breve
              </span>

            </div>

            <Separator />

            <div className='space-y-4'>
              <Label>Temperatura</Label>
              <Slider
                min={0}
                max={1}
                step={0.1}
              />

              <span className='block text-xs text-muted-foreground italic'>
                Valores mais altos tendem a deixar o resultado mais criativo e com possível erros
              </span>
            </div>

            <Separator />

            <Button type='submit' className='w-full'>
              Executar
              <Wand2 className='w-4 h-4 ml-2'/>
            </Button>

        </aside>
      </main>
    </div>
  )
}
