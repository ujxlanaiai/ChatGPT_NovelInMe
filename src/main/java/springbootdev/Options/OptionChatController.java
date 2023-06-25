package springbootdev.Options;

import io.github.flashvayne.chatgpt.service.ChatgptService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import springbootdev.Character.ChatService;

@Controller
@RequestMapping("/options")
public class OptionChatController {

    private final ChatService chatService;
    private final ChatgptService chatgptService;

    public OptionChatController(ChatService chatService, ChatgptService chatgptService) {
        this.chatService = chatService;
        this.chatgptService = chatgptService;
    }

    @GetMapping("")
    public String showOptions(@RequestParam("result1") String result1, Model model){
        String inputOption1 = "Show me one possible option in less than 2 sentences for the continuing story of: " + result1;
        String option1 = chatService.getChatResponse(inputOption1);

        String inputOption2 = "Show me one possible option in less than 2 sentences for the continuing story of: " + result1;
        String option2 = chatService.getChatResponse(inputOption2);

        model.addAttribute("result1", result1);
        model.addAttribute("option1", option1);
        model.addAttribute("option2", option2);

        return "optionPage";
    }
}
