package springbootdev.Ending;

import io.github.flashvayne.chatgpt.service.ChatgptService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import springbootdev.Character.ChatService;

@Controller
@RequestMapping("/ending1")
public class Ending1Controller {

    private final ChatService chatService;
    private final ChatgptService chatgptService;

    public Ending1Controller(ChatService chatService, ChatgptService chatgptService) {
        this.chatService = chatService;
        this.chatgptService = chatgptService;
    }

    @GetMapping("")
    public String showEnding1(@RequestParam("result1") String result1, @RequestParam("option1") String option1,
                              Model model){
        String inputEnding1 = "Create and show the ending of the story: " + result1 + option1;

        String ending1 = chatService.getChatResponse(inputEnding1);

        model.addAttribute("ending1", ending1);
        model.addAttribute("option1", option1);
        model.addAttribute("result1", result1);

        return "ending1Page";
    }
}
